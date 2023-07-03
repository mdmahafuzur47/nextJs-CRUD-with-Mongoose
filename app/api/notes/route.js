import connectMongoDb from "@/db/mongodb";
import Note from "@/models/note";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { title, desc } = await req.json();
  // console.log(title,desc)
  await connectMongoDb();
  await Note.create({ title, desc });
  return NextResponse.json(
    {
      message: "Note Created",
    },
    { status: 201 }
  );
};


export const GET = async(req) =>{
  await connectMongoDb();
  const notes = await Note.find();
  // console.log(notes)
  return NextResponse.json({notes});
}



export const DELETE = async(req) =>{
  const id = req.nextUrl.searchParams.get("id");
  // console.log(req.nextUrl.searchParams.get("id"));
  await connectMongoDb();
  await Note.findByIdAndDelete(id);
  return NextResponse.json({message: "Deleted"},{status: 200})
}
