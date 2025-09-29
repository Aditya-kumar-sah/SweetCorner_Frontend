# Sweet Shop Management System

A modern web application for managing a sweet shop, built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  

AI (ChatGPT) was used as a scaffolding and guidance tool to generate the initial skeleton of the backend and frontend. All **core logic, business rules, authentication, and database integration** were implemented independently.  

---

##  Features

###  User Features
- **Authentication** – Register, log in, and log out securely with **JWT-based authentication**.
- **Dashboard** – View available sweets.
- **Search & Filter** – Search sweets by **name, category, or price**.
- **Purchase** – Buy sweets by specifying the desired quantity.

###  Admin Features
- **Dashboard** – Manage shop inventory and view sweets.
- **CRUD Operations** – Add, delete, update, and restock sweets.
- **Inventory Management** – Track sweet quantities and ensure stock availability.
- **All User Features** – Admins can also search and purchase sweets.

---

## AI Usage with ChatGPT

ChatGPT was used in development for:
- **Backend Skeleton** – Suggested Mongoose schemas, and initial file structure.
- **Frontend Skeleton** – Suggested React component hierarchy, dashboard layout, and Tailwind-based styling.
- **Code Examples** – Examples for forms, popups, axios API calls, and role-based rendering.
- **Testing Guidance** – Suggestions for Jest and Supertest structures.

> **Note:** AI provided structural guidance and boilerplate.  
> **All business logic, authentication, and database operations were implemented manually.**

---

##  Authentication

- **JWT-based authentication** for both users and admins.
- Tokens stored securely in cookies.
- Role-based dashboards (`user` vs `admin`).

---

##  Technology Stack

- **Frontend:** React.js, Tailwind CSS, React Router  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT, Cookies  
- **Testing:** Jest  

---

##  Testing

Backend testing is available here:  
 [SweetCorner Backend](https://github.com/Aditya-kumar-sah/SweetCorner_Backend)

---

##  Screenshots

- **Login/Register Page:**  
  ![Login](https://github.com/user-attachments/assets/501c9b29-5c12-48ff-bea0-1dbfe02b6c2d)  
  ![Register](https://github.com/user-attachments/assets/32b4a9a8-0df3-4eb7-a35d-afc501e3109e)

- **Admin Dashboard View:**  
  ![Admin Dashboard 1](https://github.com/user-attachments/assets/a19c22f1-7259-426e-9e9f-b80fae933f5b)  
  ![Admin Dashboard 2](https://github.com/user-attachments/assets/ab41ae4a-6998-4e01-bb4a-05ce27221cf5)  
  (Admins can add new sweets from the top-right corner and update/restock using buttons on each card.)

- **User Dashboard View:**  
  ![User Dashboard](https://github.com/user-attachments/assets/e0faa32f-ef29-4da0-ac22-df4f2f3cdac0)  
  (Users can search sweets by name, category, or price and purchase them.)

---

##  How to Clone & Run the Project

Follow these steps to set up the project locally:

1. **Clone the repository**  
   git clone https://github.com/Aditya-kumar-sah/SweetCorner_Frontend.git
2. cd SweetCorner_Frontend
3. npm install
4. npm run dev
5. User Account
   Email: user123@gmail.com,Password: user123
5. Admin Account
   Email: admin123@gmail.com,Password: admin123
