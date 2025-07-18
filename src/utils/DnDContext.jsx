import { createContext, useState } from "react";
//useContext

const DnDContext = createContext(); // [null, (_) => {}]

export const DnDProvider = ({ children }) => {
  const [type, setType] = useState(null);

  return (
    <DnDContext.Provider value={[type, setType]}>
      {children}
    </DnDContext.Provider>
  );
};

export default DnDContext;

// export const useDnD = () => {
//   return useContext(DnDContext);
// };

// export const useDnD = () => useContext(DnDContext);
