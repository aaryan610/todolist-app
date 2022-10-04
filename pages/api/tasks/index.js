import { tasks } from "../../../Data/tasks";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(tasks);
  } else if (req.method === "POST") {
    const task = req.body.task;
    const date = req.body.date;
    const newTask = {
      id: Date.now(),
      name: task,
      date:date
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
  }
}
