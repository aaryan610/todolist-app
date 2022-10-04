import { list } from "postcss";
import { useState, useEffect } from "react";
import SingleItem from "../components/single-item";

const Home = (props) => {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [list, setList] = useState([]);

  // Add item to the list
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear input fields after adding
    setName("");
    setDate("");
  };

  return (
    <>
      <main className="grid place-items-center h-screen">
        <div className="container bg-white rounded-lg p-4 w-1/2 my-4 h-1/2 overflow-y-scroll">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
            <input
              type="text"
              className="border rounded h-full py-2 px-3 text-gray-700 mb-3 focus:outline-none"
              placeholder="Enter Title"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="date"
              className="border rounded h-full py-2 px-3 text-gray-700 mb-3 focus:outline-none"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Add
            </button>
          </form>
          <div className="list mt-4">
            {list.map((item, index) => {
              return <SingleItem key={index} task={item.name} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
