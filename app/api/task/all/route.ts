import Task from "../../../../models/tasks";
import { connectToDB } from "../../../../utils/database";

import { NextResponse } from "next/server"

export const GET = async(_request: Request) => {

    try {
        await connectToDB()
        const tasks = await Task.find({}) //Renvoie toutes les tâches disponibles dans la collection de tâches

        return NextResponse.json(
            tasks,
            { status: 200 }
        )

    }
    catch(error) {
        console.log(error)
        return NextResponse.json(
            "Failed to fetch all tasks",
            { status: 500 }
        )

    }
}