import { useRef, useCallback, useState } from "react";
import {
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  useReactFlow,
  Background,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import toast from "react-hot-toast";

import Sidebar from "../Sidebar/Sidebar";
// import { useDnD } from "../../utils/DnDContext";
import useDnD from "../../utils/useDnD";
import { MessageNode } from "../MessageNode/MessageNode";
import Navbar from "../Navbar/Navbar";
import "./DnDFlow.css";

const nodeTypes = {
  message: MessageNode,
};

const initialNodes = [];
// {
//     id: "1",
//     type: "",
//     data: { label: "input node" },
//     position: { x: 250, y: 5 },
//   },

let id = 0;
const getId = () => `dndnode_${id++}`; // `dndnode_${id++}`

function DnDFlow() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const [type, setType] = useDnD();
  const [textVal, setTextVal] = useState("");
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [showBar, setShowBar] = useState({
    Update: false,
    Message: true,
  });

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      // check if the dropped element is valid
      if (!type) {
        return;
      }

      // project was renamed to screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `test message ${id}` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes, type]
  );

  const onDragStart = (event, nodeType) => {
    setType(nodeType);
    event.dataTransfer.setData("text/plain", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const handleNodeClick = (event, node) => {
    event.stopPropagation();
    // console.log("Node clicked:", node);

    if (node.type === "message") {
      const { id, data } = node;
      setSelectedNodeId(id);
      setTextVal(data.label);
      setShowBar({
        Update: true,
        Message: false,
      });
    }
  };

  const handleOnClick = () => {
    if (!selectedNodeId) {
      toast("Please select a node to update", {
        icon: null,
        style: {
          background: "#ff980040",
        },
      });
      return;
    }

    const nodeEdgeTarget = edges.map((edge) => edge.target);
    const nodesEdges = nodes.filter(
      (node) => !nodeEdgeTarget.includes(node.id)
    );

    if (nodes.length > 1 && nodesEdges.length > 1) {
      toast.error("Cannot save flow");
      return;
    }

    const updatedNodes = nodes.map((node) => {
      if (node.id === selectedNodeId) {
        return {
          ...node,
          data: {
            ...node.data,
            label: textVal,
          },
        };
      }
      return node;
    });

    setNodes(updatedNodes);
    setTextVal("");
    setShowBar({
      Update: false,
      Message: true,
    });
    setSelectedNodeId(null);
    toast.success("Flow saved");
  };

  const handleBack = () => {
    setTextVal("");
    setShowBar({
      Update: false,
      Message: true,
    });
  };

  return (
    <>
      <Navbar onClick={handleOnClick} />
      <div className="dndflow">
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={handleNodeClick}
            onDrop={onDrop}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            fitView
          >
            <Controls />
            <Background />
          </ReactFlow>
        </div>
        {showBar.Update && (
          <div className="updatenode_control">
            <aside className="updatenode_sidebar">
              <div className="updatenode_header">
                <button onClick={handleBack}>
                  <i className="bi bi-arrow-left-short"></i>
                </button>
                <h5>Message</h5>
              </div>
              <div className="form">
                <label htmlFor="nodeLabel">Text</label>
                <textarea
                  type="text"
                  id="nodeLabel"
                  value={textVal}
                  onChange={(e) => setTextVal(e.target.value)}
                />
                {/* <button>Update Node</button> */}
              </div>
            </aside>
          </div>
        )}

        {showBar.Message && <Sidebar />}
      </div>
    </>
  );
}

export default DnDFlow;
