import { Handle } from "@xyflow/react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./MessageNode.css";

export function MessageNode(props) {
  return (
    <div className="message-node">
      <div className="message-node__header">
        <div className="message-node__title">
          <i className="bi bi-chat-text"></i>
          <h5>Send Message</h5>
        </div>
        <i className="bi bi-whatsapp"></i>
      </div>
      <div className="message-node__content">
        <p>
          {/* test message 1 */}
          {props.data.label || "test message"}
        </p>
      </div>
      <Handle type="target" position="left" />
      <Handle type="source" position="right" />
    </div>
  );
}
