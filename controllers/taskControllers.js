export async function getTasks(req, res) {
 
}

export async function getLastId(req,res){
    try{
        var id = JSON.parse(localStorage.getItem("lastId")) || 0;
        if(id == 0){
            localStorage.setItem("lastId",0);
            res.status(200).json(id);
        }else{
            res.status(200).json(id);
        }
    }catch (error) {
        res.status(404).json({ error: "Error while fetching last id" });
      }
}

export async function addTask(req, res) {
  try {
    const { id, name, date, isCompleted } = req.body;
    const task = {
      id,
      name,
      date,
      isCompleted,
    };
    console.log(task);
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (error) {
    res.status(404).json({ error: "Error while adding task" });
  }
}
