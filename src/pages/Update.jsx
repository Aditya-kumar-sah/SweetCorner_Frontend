import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../component/Header";

const Update = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // sweet id from URL

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_BACKENDURL}/api/auth/getUserData`,
          { withCredentials: true }
        );
        if (res) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setUser(null);
      }
    };

    fetchUserData();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      // Append only non-empty fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value) {
          data.append(key, value);
        }
      });

      if (file) data.append("file", file);

      const res = await axios.put(
        `${import.meta.env.VITE_APP_BACKENDURL}/api/sweets/${id}`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      setMessage(res.data.message || "Sweet updated successfully!");
      navigate("/home");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error updating sweet");
    }
  };

  return (
    <div className="absolute inset-0 min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 flex flex-col overflow-auto">
      {/* Sticky Header */}
      <Header user={user} />

      {/* Form container */}
      <main className="flex flex-1 justify-center items-center p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl space-y-5"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-center text-pink-600">
            ✏️ Update Sweet
          </h2>

          {message && (
            <p className="text-center text-sm font-medium text-green-600">
              {message}
            </p>
          )}

          <div>
            <label className="block font-medium">Sweet Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none text-sm sm:text-base"
              placeholder="Leave empty if not updating"
            />
          </div>

          <div>
            <label className="block font-medium">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none text-sm sm:text-base"
              placeholder="Leave empty if not updating"
            />
          </div>

          <div>
            <label className="block font-medium">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none text-sm sm:text-base"
              placeholder="Leave empty if not updating"
            />
          </div>

          <div>
            <label className="block font-medium">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none text-sm sm:text-base
                appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance]:textfield"
              placeholder="Leave empty if not updating"
            />
          </div>

          <div>
            <label className="block font-medium">Sweet Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 w-full border p-2 rounded-lg cursor-pointer bg-gray-50 text-sm sm:text-base"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            🔄 Update Sweet
          </button>
        </form>
      </main>
    </div>
  );
};

export default Update;

