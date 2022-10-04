import { useState } from "react";
import SingleItem from "../components/single-item";

const Home = () => {
  const [item, setItem] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add item code here
  };

  return (
    <>
      <main className="grid place-items-center h-screen">
        <div className="container bg-white rounded-lg p-4 w-1/2 my-4 h-1/2 overflow-y-scroll">
          <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-2">
            <input
              type="text"
              className="border rounded h-full py-2 px-3 text-gray-700 mb-3 focus:outline-none col-span-2"
              onChange={(e) => setItem(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Add
            </button>
          </form>
          <div className="list mt-4">
            <SingleItem task="This is the first item" />
            <SingleItem task="This is the second item" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
