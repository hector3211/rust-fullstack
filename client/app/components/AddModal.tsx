"use client";

type ModalProps = {
  header: string;
  inputOne: string;
  inputTwo: string;
};
export default function Modal({ header, inputOne, inputTwo }: ModalProps) {
  return (
    <div className="flex justify-center items-center ">
      <label htmlFor="my-modal-3" className="btn btn-primary w-32">
        Add
      </label>
      <input type={"checkbox"} id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            X
          </label>
          <div className="flex flex-col justify-between items-center">
            <h3 className="text-3xl font-bold pb-5">{header}</h3>
            <div className="flex flex-col justify-center w-60">
              <input
                className="border border-white rounded-md my-1"
                type={"text"}
                placeholder={inputOne}
              />
              <input
                className="border border-white rounded-md my-1"
                type={"text"}
                placeholder={inputTwo}
              />
            </div>
            <button className="btn btn-success btn-wide my-3 w-ful">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
