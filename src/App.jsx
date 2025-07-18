import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Layout from "./pages/Layout/Layout";
import NoPageError from "./pages/NoPageError/NoPageError";

export default function App() {
  return (
    <Router basename="/cbflow">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="*" element={<NoPageError />} />
      </Routes>
    </Router>
  );
}
