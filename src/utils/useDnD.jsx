import { useContext } from "react";
import DnDContext from "./DnDContext";

const useDnD = () => useContext(DnDContext);

export default useDnD;