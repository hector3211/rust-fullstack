"use client";
import ModalAdd from "../components/AddModal";
export default function TheFooter() {
  return (
    <footer className="relative bottom-0 w-full py-4">
      <ModalAdd
        header={"Add a movie"}
        inputOne={" Title"}
        inputTwo={" Rating"}
      />
    </footer>
  );
}
