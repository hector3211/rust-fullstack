"use client";
export default function TheFooter() {
  return (
    <footer className="absolute bottom-0 w-full">
      <label htmlFor="my-modal-add" className="btn">
        Add
      </label>
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-add"
            className="btn btn-sm absolute right-2 top-2"
          >
            X
          </label>
          <input type="text" id="my-modal-add" placeholder="Movie Title" />
          <input type="text" id="my-modal-add" placeholder="Movie Cover Link" />
          <input type="text" id="my-modal-add" placeholder="Movie Rating" />
        </div>
      </div>
    </footer>
  );
}
