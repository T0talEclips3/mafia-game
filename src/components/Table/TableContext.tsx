import React from "react";

const TableContext = React.createContext(undefined);

export const TableProvider: React.FC<any> = ({ value, children }) => {
  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

export const useTableContext = () => {
  const context = React.useContext(TableContext);
  if (context === void 0) {
    throw new Error("Hook must be used within the context!");
  }
  return context;
};
