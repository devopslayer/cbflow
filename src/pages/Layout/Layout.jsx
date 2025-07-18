import { ReactFlowProvider } from "@xyflow/react";
import { DnDProvider } from "../../utils/DnDContext";
import DnDFlow from "../../components/DnDFlow/DnDFlow";
import { Toaster } from "react-hot-toast";

function Layout() {
  return (
    <ReactFlowProvider>
      <DnDProvider>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            success: {
              icon: null,
              style: {
                background: "#4caf5040",
              },
            },
            error: {
              icon: null,
              style: {
                background: "#f4433640",
              },
            },
          }}
        />
        <DnDFlow />
      </DnDProvider>
    </ReactFlowProvider>
  );
}

export default Layout;
