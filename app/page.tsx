'use client'
import { useState, useEffect } from "react";
import Header from "../components/Header"
import AddTask from "../components/AddTask"
import { Spinner, Flex } from "@chakra-ui/react"
import { ITask } from "../types"
import  NoTask  from "../components/NoTask"
import Task from "../components/Task"



export default function Home() {
  const [task, setTask] = useState("")
  const [isLoading, setIsLoading,] = useState(true)
  const [allTasks, setAllTasks] = useState([])


  const handleCreateTask = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/task/new", {
        method: 'POST',
        body: JSON.stringify({
          task: task
        })
      })
      if (response.ok) {
        setTask('')
        fetchTasks()
      }
      else {
        console.log('error')
      }
    }
    catch (error) {
      console.log(error)
    }
    setIsLoading(false)

  }

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/task/all")
      const data = await response.json()
      setAllTasks(data)
      setIsLoading(false)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {  //Permet de récupérer toutes les tâches 
    fetchTasks()

  }, [])







const handleCompleteTask = async() => {

}


const handleDeleteTask = async() => {

}









  return (
    <>
      <Header />
      <AddTask task={task} setTask={setTask} handleCreateTask={handleCreateTask} />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Flex direction="column" p="2rem">

            {allTasks.length > 0 ?
              allTasks.map((individualTask: ITask) => (
                <Task key={individualTask._id} individualTask=
                {individualTask} handleCompleteTask={handleCompleteTask} handleDeleteTask= {handleDeleteTask} />
              )) : (
                <NoTask />
              )
            }

          </Flex>

        </>
      )}
    </>

  );
}
