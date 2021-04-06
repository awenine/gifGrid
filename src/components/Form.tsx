import React, { useState } from "react";

export interface FormProps {
  handleSearch: (searchTerm: string) => void;
}

const Form: React.FC<FormProps> = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <form 
      className="flex flex-col items-center"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(searchTerm)
      }}  
    >
      <label htmlFor="searchGifs">
        {'Search for GIFs -'}
        <input
          className="border-solid border-2 m-3 p-2 w-80"
          id="searchGifs"
          type="text"
          value={searchTerm}
          placeholder="Type a search term..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <button className="bg-blue-400 p-2 border-1 rounded-sm m-3 w-44 transition duration-100 ease-in-out hover:bg-blue-200">
        Submit
      </button>
    </form>
  );
};

export default Form;
