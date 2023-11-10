import React from "react";

interface SearchFormProps {
  searchTerm: any;
  setSearchTerm: (p: any) => void;
}

const SearchForm = ({ searchTerm, setSearchTerm }: SearchFormProps) => {
  return (
    <>
      <label htmlFor="search">Pesquisar</label>
      <input
        className="p-1 text-black rounded"
        id="search"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </>
  );
};

export default SearchForm;
