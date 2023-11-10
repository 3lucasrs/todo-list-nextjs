import React from "react";

interface AddFormProps {
  field: any;
  setField: (p: any) => void;
  addNewTask: () => void;
}

const AddForm = ({ field, setField, addNewTask }: AddFormProps) => {
  return (
    <>
      <label className="mt-2" htmlFor="add">
        Adicionar
      </label>
      <input
        className="p-1 text-black rounded"
        id="add"
        type="text"
        value={field}
        onChange={(e) => setField(e.target.value)}
        autoFocus
      />

      <button
        className="mt-5 bg-green-700 px-2 py-1 rounded hover:bg-green-900"
        onClick={addNewTask}
      >
        Adicionar
      </button>
    </>
  );
};

export default AddForm;
