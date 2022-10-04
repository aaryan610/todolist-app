import { useState } from "react";

const Home = () => {
  const [item, setItem] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add item code here
  };

  return (
    <>
      <main className="grid ">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setItem(e.target.value)} />
            <button type="submit">Add</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Home;
