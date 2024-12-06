import Task from '../../../../models/tasks'; //import le modèle qui représente la structure de données
import { connectToDB } from '../../../../utils/database'; //import de la fonction pour se connecter

import { NextResponse } from 'next/server'; //Import de la classe qui permet de définir la réponse à éxecuter

export const POST = async(request: Request) => {

const { task } = await request.json() //Permet d'extraire le corps de la requête HTTP POST

try {
    await connectToDB() //Connexion à la base de données mongodb
    const newTask = new Task({ task }) //Prépare la tâche à être enregistrée dans la base de données

    await newTask.save() //Enregistrement de la tâche dans la base de données


    return NextResponse.json( //Si la requête fonctionne ou non il renvoie une réponse en format json avec un code de status
        newTask, 
        { status: 201 }
    )
}
catch(error) {
    console.log(error)
    return NextResponse.json ("Failed to create a new task",
    { status: 500 })
}


}