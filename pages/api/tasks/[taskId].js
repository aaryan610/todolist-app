import { tasks } from "../../../Data/tasks";

export default function handler(req, res) {
  const { taskId } = req.query;
  if (req.method == "GET") {
    const task = tasks.find((task) => task.id === parseInt(taskId));
    res.status(200).json(task);
  } else if (req.method == "DELETE") {
    const task = tasks.find((task) => task.id === parseInt(taskId));
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(taskId));
    tasks.splice(taskIndex, 1);
    res.status(200).json(task);
  }
  else if (req.method == "PATCH") {
    const {task,date} = req.body;
    const value = tasks.find((task) => task.id === parseInt(taskId));
    value.name = task;
    value.date = date;
    res.status(200).json(value);
  }
}
