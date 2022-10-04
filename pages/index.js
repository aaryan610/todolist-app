import { useEffect, useState } from "react";

const Home = () => {
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [isCompleted, setIsCompleted] = useState(false);
  const [date, setDate] = useState();

  // async function getId() {
  //   const res = await fetch("../api/getData");
  //   const id = await res.json();
  //   setId(id);
  // }

  // useEffect(() => {
  //   getId();
  // }, [id]);

    async function getId() {
    id = JSON.parse("")
    setId(id);
  }

  // useEffect(() => {
  //   getId();
  // }, [id]);

  async function addTask( data) {
   const response =  await fetch("/api/tasks", {
    method:'POST',
    body:JSON.stringify({data}),
    headers:{
      'Content-Type':'application/json'
    }
   })

   const value = await response.json();
   console.log(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      id,
      name,
      date,
      isCompleted,
    };
    console.log(values);
    addTask(values);
    // Add item code here
  };

  return (
    <>
      <main className="grid ">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button type="submit">Add</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Home;
