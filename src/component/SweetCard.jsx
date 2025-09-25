import React from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

const SweetCard = ({ filteredSweets, user }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_APP_BACKENDURL}/api/sweets/${id}`,
        { withCredentials: true }
      );

      alert("Successfully Deleted!");
      // Optional: refresh or remove deleted sweet from UI
    } catch (error) {
      console.error("Error deleting sweet:", error);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredSweets.length === 0 ? (
        <div className="text-bold text-3xl text-gray-600">Nothing Found</div>
      ) : (
        filteredSweets.map((sweet) => (
          <div
            key={sweet._id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            {/* Image */}
            <img
              src={sweet.sweetpic}
              alt={sweet.name}
              className="w-full h-48 object-cover"
            />

            {/* Info */}
            <div className="p-4 flex flex-col gap-2">
              {/* Name */}
              <h2 className="text-lg font-bold text-purple-700">{sweet.name}</h2>

              {/* Category & Price */}
              <div className="flex justify-between text-gray-700 font-medium">
                <span>Category: {sweet.category}</span>
                <span>Price: ₹{sweet.price}</span>
              </div>

              {/* Quantity */}
              <p className="text-gray-600 font-medium">
                Quantity: {sweet.quantity}
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-2 mt-2">
                <button className="cursor-pointer bg-green-500 text-white py-1 rounded-lg hover:bg-green-600 transition-colors">
                  Purchase
                </button>

                {user?.isAdmin && (
                  <>
                    <button className="cursor-pointer bg-blue-500 text-white py-1 rounded-lg hover:bg-blue-600 transition-colors">
                      Restock
                    </button>

                    <button
                      onClick={() => handleDelete(sweet._id)}
                      className="cursor-pointer bg-red-500 text-white py-1 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>

                    <Link to={`/update/${sweet._id}`}
                      className="cursor-pointer bg-yellow-500 text-white py-1 rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                      Update
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SweetCard;
