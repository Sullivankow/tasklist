import Task from "../../../../../models/tasks";
import { connectToDB } from "../../../../../utils/database";


import { NextResponse } from "next/server";
import { IDeleteTaskRequestParam } from "../../../../../types"

export const DELETE = async(request: Request, {params }:
    IDeleteTaskRequestParam) => {
        try {
await connectToDB()
await Task.findByIdAndDelete(params.id)

return new NextResponse("Task deleted successfully", { status: 200})

        }
        catch(error){
            console.log(error)
            return new NextResponse("Error deleting task", { status: 500})
        }
    }