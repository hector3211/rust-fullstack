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
          <h3 className="text-lg font-bold">{header}</h3>
          <div className="flex flex-col justify-between">
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
            <button className="btn btn-success">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
