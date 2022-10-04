import { list } from "postcss";
import { useState, useEffect } from "react";
import SingleItem from "../components/single-item";

const Home = (props) => {
  const [tasks, setTasks] = useState();
  const [date, setDate] = useState();
  const [task, setTask] = useState("");

  const [id, setId] = useState();
  const [addButton, setAddButton] = useState(true);

  const fetchTask = async () => {
    const response = await fetch("/api/tasks");
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchSingleTask = async (taskId) => {
    const response = await fetch(`/api/tasks/${taskId}`);
    const data = await response.json();
    console.log(data);
    setTask(data.name);
    setDate(data.date);
    setId(data.id);
    setAddButton(false);
  };

  const submitTask = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ task, date }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    fetchTask();
    console.log(data);
    setTask("");
    setDate("");
  };

  const editTask = async (e, taskId) => {
    e.preventDefault();
    const response = await fetch(`/api/tasks/${taskId}`, {
      method: "PATCH",
      body: JSON.stringify({ task, date }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    fetchTask();
    console.log(data);
    setTask("");
    setDate("");
  };

  const deleteTask = async (taskId) => {
    const response = await fetch(`/api/tasks/${taskId}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log(data);
    fetchTask();
  };

  return (
    <>
      <main className="grid place-items-center h-screen">
        <div className="container bg-white rounded-lg p-4 w-1/2 my-4 h-1/2 overflow-y-scroll">
          <form
            onSubmit={addButton == true ? submitTask : (e) => editTask(e, id)}
            className="grid grid-cols-2 gap-2"
          >
            <input
              type="text"
              className="border rounded h-full py-2 px-3 text-gray-700 mb-3 focus:outline-none"
              placeholder="Enter Title"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />
            <input
              type="date"
              className="border rounded h-full py-2 px-3 text-gray-700 mb-3 focus:outline-none"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            {addButton == true ? (
              <button
                // onClick={submitTask}
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
              >
                Add
              </button>
            ) : (
              <button
                // onClick={() => editTask(id)}
                type="submit"
                className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
              >
                Update Task
              </button>
            )}
          </form>
          <div className="list mt-4">
            {tasks
              ? tasks.map((item, index) => {
                  return (
                    <div className="single-item bg-blue-100 rounded py-3 px-2 mt-2 flex justify-between items-center">
                      <div>
                        <input type="checkbox" className="mr-2" />
                        {item.name}
                      </div>
                      <div className="buttons">
                        <button
                          type="button"
                          onClick={() => fetchSingleTask(item.id)}
                          className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="ml-2 bg-red-500 hover:bg-red-700 text-white p-2 rounded-md"
                          onClick={() => deleteTask(item.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
