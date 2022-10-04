import { getTasks } from "../../../controllers/taskControllers";


export default async function handler(req,res){
    const {method} = req;

    switch(method){
        case 'GET':
            try {
                const tasks = JSON.parse(localStorage.getItem("tasks"));
                if (!tasks) {
                  return res.status(400).json({ error: "No Task found" });
                } else {
                  res.status(200).json(tasks);
                }
              } catch (error) {
                res.status(404).json({ error: "Error while fetching" });
              }
            break;
        case 'POST':
            try{
                const { id, name, date, isCompleted } = req.body;
                const task = {
                  id,
                  name,
                  date,
                  isCompleted,
                };
                var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
                tasks.push(task);
                localStorage.setItem("tasks", JSON.stringify(tasks));
              }catch (error) {
                res.status(404).json({ error: "Error while adding task" });
              }
            break;
        case 'PATCH':
            res.status(200);
            break;
        case 'DELETE':
            res.status(200);
            break;    
        default:
            res.status(400).end(`Method ${method} not allowed`) 
    }
}