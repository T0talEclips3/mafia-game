import React from "react";
import { FormContext } from "./index";

export const useFormContext = () => {
  const context = React.useContext(FormContext);

  if (context === void 0) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context;
};
