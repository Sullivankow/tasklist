import { Schema, model, models } from 'mongoose'
import { ITask } from '../types'

const taskSchema = new Schema<ITask>({
task: {

type: String,
required: [true, 'Task is required.'],

},
completed: {
type: Boolean,
default: false
}
})

const Task = models.Task || model<ITask>('Task', taskSchema) // Créer un model mogoose pour représenter les tâches

export default Task