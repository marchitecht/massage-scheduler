import React, { useState } from "react";
import cx from "classnames";
import dayjs from "dayjs";
import Modal from "./Modal";
import ModalCosm from "./ModalCosm";

const SubmitFormCosm = ({ selected, bookingDate }) => {
  // console.log(bookingDate, 'bookingDate in submit form');
  const fullTime = dayjs().format("YYYY-MM-DD").concat("T").concat(selected);
  const date = dayjs().format("YYYY-MM-DD");

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      selected,
    };
  };

  return (
    <>
      <form
        className=" py-4 space-y-4"
        onSubmit={handleSubmit}
        value={selected}>
        <span className="ml-3 text-lg font-medium">Начало сеанса:</span>

        <span className="ml-3 text-lg font-medium">{selected}</span>

        <div className="flex items-left justify-center">
          <button
            onClick={handleOpenModal}
            type="submit"
            className="flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white bg-indigo-500">
            Назначить время
          </button>
        </div>
      </form>
      {open && (
        <ModalCosm
          setOpen={setOpen}
          bookingDate={bookingDate}
          open={open}
          onClose={handleCloseModal}
          selected={selected}
        />
      )}
    </>
  );
};

function Input({ label, placeholder }) {
  return (
    <div className="border border-b-0 rounded overflow-hidden mb-4">
      <label className="px-2 py-2 block text-white uppercase text-sm tracking-wide">
        {label}
      </label>
      <input
        className="px-2 pb-4 w-full border-gray border-solid border-b border-grey-dark:focus rounded"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default SubmitFormCosm;
