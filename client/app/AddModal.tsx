export default function Modal() {
  return (
    <div>
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
    </div>
  );
}
