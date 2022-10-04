export async function getTasks(req, res) {
  try {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
      return res.status(400).json({ error: "No Task found" });
    } else {
      console.log(tasks);
      // res.status(200).json(tasks);
    }
  } catch (error) {
    res.status(404).json({ error: "Error while fetching" });
  }
}

export async function addTask(req, res) {
  try {
    const { name, date, isCompleted } = req.body;
    const task = {
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
