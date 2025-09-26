import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const SweetCard = ({ filteredSweets, user }) => {
  const navigate = useNavigate();
  
  const [showPopup, setShowPopup] = useState(false);
  const [actionQuantity, setActionQuantity] = useState(0);
  const [selectedSweetId, setSelectedSweetId] = useState(null);
  const [actionType, setActionType] = useState(""); // "restock" or "purchase"

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_APP_BACKENDURL}/api/sweets/${id}`,
        { withCredentials: true }
      );
      alert("Successfully Deleted!");
    } catch (error) {
      console.error("Error deleting sweet:", error);
    }
  };

  const openPopup = (id, type) => {
    setSelectedSweetId(id);
    setActionQuantity(0);
    setActionType(type);
    setShowPopup(true);
  };

  const handleSubmit = async () => {
    if (actionQuantity <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    try {
      const endpoint =
        actionType === "restock"
          ? `/api/sweets/${selectedSweetId}/restock`
          : `/api/sweets/${selectedSweetId}/purchase`;

      await axios.post(
        `${import.meta.env.VITE_APP_BACKENDURL}${endpoint}`,
        { quantity: actionQuantity },
        { withCredentials: true }
      );

      alert(
        actionType === "restock"
          ? "Quantity updated successfully!"
          : "Purchase successful!"
      );
      setShowPopup(false);
    } catch (error) {
      console.error(`Error during ${actionType}:`, error);
    }
  };

  // Formatter for Indian Rupee
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
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
              <h2 className="text-lg font-bold text-purple-700">{sweet.name}</h2>

              <div className="flex flex-col justify-between item-start w-full gap-2 text-gray-700 font-medium">
                <span>Category: {sweet.category}</span>
                <span>Price: {formatPrice(sweet.price)} <span className="text-sm text-gray-400">per piece</span></span>
              </div>

              <p className="text-gray-600 font-medium">
                Quantity: {sweet.quantity}
              </p>

              <div className="flex flex-col gap-2 mt-2">
                <button
                  onClick={() => openPopup(sweet._id, "purchase")}
                  className="cursor-pointer bg-green-500 text-white py-1 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Purchase
                </button>

                {user?.isAdmin && (
                  <>
                    <button
                      onClick={() => openPopup(sweet._id, "restock")}
                      className="cursor-pointer bg-blue-500 text-white py-1 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Restock
                    </button>

                    <button
                      onClick={() => handleDelete(sweet._id)}
                      className="cursor-pointer bg-red-500 text-white py-1 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>

                    <Link
                      to={`/update/${sweet._id}`}
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

      {/* Action Popup for Restock or Purchase */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-gray-700">
              {actionType === "restock" ? "Restock Sweet" : "Purchase Sweet"}
            </h2>
            <input
              type="number"
              min="1"
              value={actionQuantity}
              onChange={(e) => setActionQuantity(Number(e.target.value))}
              className="border p-2 rounded-md"
              placeholder="Enter quantity"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-500 text-white py-1 px-4 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SweetCard;
