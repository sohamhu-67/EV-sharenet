import { useState } from "react";
import axios from "axios";

export default function AddCharger() {
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/add-charger", {
      owner: "John",
      address,
    });
    setAddress("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">➕ Add Your Charger</h2>
        <input
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Charger
        </button>
      </form>
    </div>
  );
}
