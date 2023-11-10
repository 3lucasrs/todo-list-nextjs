import React from "react";

interface EditFormProps {
  field: any;
  setField: (p: any) => void;
  cancelUpdateTask: () => void;
  updateEditTask: () => void;
}

const EditForm = ({
  field,
  setField,
  cancelUpdateTask,
  updateEditTask,
}: EditFormProps) => {
  return (
    <>
      <label className="mt-2" htmlFor="editform">
        Editar
      </label>
      <input
        className="p-1 text-black rounded"
        id="editform"
        type="text"
        value={field}
        onChange={(e) => setField(e.target.value)}
      />

      <button
        className="mt-5 bg-orange-500 px-2 py-1 rounded hover:bg-orange-700"
        onClick={cancelUpdateTask}
      >
        Cancelar edição
      </button>
      <button
        className="mt-5 bg-green-700 px-2 py-1 rounded hover:bg-green-900"
        onClick={updateEditTask}
      >
        Editar tarefa
      </button>
    </>
  );
};

export default EditForm;
