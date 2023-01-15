"use client";
import ModalAdd from "./components/AddModal";
export default function TheFooter() {
  return (
    <footer className="absolute bottom-0 w-full py-4">
      <ModalAdd
        header={"Add a Rusty movie"}
        inputOne={"Movie Title"}
        inputTwo={"Movie Rating"}
      />
    </footer>
  );
}
