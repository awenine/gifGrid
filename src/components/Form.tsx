import React, { useState } from "react";

export interface FormProps {}

const Form: React.FC<FormProps> = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <form className="flex flex-col items-center">
      <label htmlFor="searchGifs">
        <input
          className="border-solid border-2 m-3 p-2"
          id="searchGifs"
          type="text"
          value={searchTerm}
          placeholder="Search for gifs..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <button className="bg-blue-400 p-2 border-1 rounded-sm m-3 transition duration-100 ease-in-out hover:bg-blue-200">
        Submit
      </button>
    </form>
  );
};

export default Form;
