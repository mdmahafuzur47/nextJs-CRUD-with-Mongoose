import { BiEdit } from "react-icons/bi";


import RemoveNote from "./RemoveNote";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/notes", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const AddNote = async () => {
  const {notes} = await getData();
  // console.log(notes);
  return (
    <>
      {notes.map((note) => (
        <div
          key={note._id}
          className="flex justify-between items-start my-3 p-4 border rounded-md"
        >
          <div>
            <h1 className="text-xl font-semibold">{note.title}</h1>
            <p>{note.desc}</p>
          </div>
          <div className="flex gap-3 items-center">
            <RemoveNote id={note._id} />
            <span className="text-red-500">
              <Link href={`/updateNote/${note._id}`}><BiEdit size={24} /></Link>
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddNote;
