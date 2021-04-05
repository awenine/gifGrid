import * as React from "react";
import SearchBar from "./SearchBar";
import SubmitButton from "./SubmitButton";

export interface FormProps {}

const Form: React.SFC<FormProps> = () => {
  return (
    <div>
      Form Renders
      <SearchBar />
      <SubmitButton />
    </div>
  );
};

export default Form;
