import connectMongoDb from "@/db/mongodb";
import Note from "@/models/note";
import { NextResponse } from "next/server";

export const GET = async(req,{params})=> {
const {id}  = params;
await connectMongoDb();
const note = await Note.findOne({_id: id});
return NextResponse.json({note},{status:200});
}

export const PUT = async(req,{params}) => {
    const {id} = params;
    const {newtitle: title, newdesc: desc} = await req.json();
    await connectMongoDb();
    await Note.findByIdAndUpdate(id,{title,desc});
    return NextResponse.json({message: "updated"},{status: 200});
}