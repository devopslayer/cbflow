// import { useDnD } from "../../utils/DnDContext";
import useDnD from "../../utils/useDnD";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebar.css";

export default function Sidebar() {
  const [_, setType] = useDnD();

  // Define the nodes that can be dragged into the Reactflow, Where Each node has it's type, label, and icon
  const nodes = {
    message: {
      label: "Message",
      icon: <i className="bi bi-chat-text"></i>,
    },
  };

  const onDragStart = (event, nodeType) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="sidebar">
      <div className="dndnode-list">
        {Object.entries(nodes).map(([type, { label, icon }]) => (
          <div
            className="dndnode default"
            onDragStart={(event) => onDragStart(event, type)}
            draggable
            key={type}
            title={label}
          >
            {icon}
            {label}
          </div>
        ))}
      </div>
    </aside>
  );
}
