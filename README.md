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

During development, **ChatGPT (AI)** was used as a tool to accelerate the initial setup and design of the Sweet Shop Management System. It helped in the following ways:

1. **Backend Skeleton Generation**
   - ChatGPT provided the **initial structure** for the backend, including:
     - Setting up Express routes for CRUD operations on sweets.
     - Creating Mongoose schemas for the sweets and users.
     - Structuring controller files with placeholder functions.
   - This allowed me to focus on implementing the **actual logic** such as purchase handling, quantity validation, and authentication rather than boilerplate setup.

2. **Frontend Skeleton Design**
   - ChatGPT assisted in generating the **basic React component structure**, including:
     - Dashboard layouts for both user and admin.
     - SweetCard component to display sweets.
     - Routing with React Router.
     - Initial popup design for actions like purchase or restock.
   - AI suggested **component hierarchy and styling** with Tailwind CSS, giving a clean starting point for the UI.

3. **Code Examples & Guidance**
   - ChatGPT provided examples of:
     - Handling form inputs and popups.
     - Making API calls with axios.
     - Conditional rendering based on user roles (admin vs user).
   - These examples were **adapted and customized** by me to implement project-specific logic, like securely handling JWT, validating purchase quantities, and updating the database.

4. **Testing Assistance**
   - ChatGPT suggested **test structures and approaches** using Jest:
     - How to test React components (unit tests for SweetCard, popups).
     - How to test backend routes using Supertest.
     - How to implement **Red-Green-Refactor cycle** for TDD.
   - I wrote all the actual test cases and logic myself, ensuring the tests fit my application.

5. **Role of AI**
   - ChatGPT acted as a **development assistant**, saving time on boilerplate code, best practices, and design patterns.
   - **All functional logic, authentication, purchase/restock calculations, and integration with the database were implemented manually.**
   - AI helped with **ideas, structure, and examples**, but the system’s business logic is my own work.

**In summary:** AI with ChatGPT was used as a scaffolding and guidance tool to speed up development and ensure proper structure, but every functional feature, database interaction, and security measure was independently designed and implemented.  


---

## Authentication

- **JWT-based authentication** is used for both users and admins.
- Tokens are securely stored in cookies with proper handling.
- Different dashboards are rendered based on user role (`user` vs `admin`).

---

## Technology Stack

- **Frontend:** React.js, Tailwind CSS, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT, Cookies
- **Testing:** Jest

---
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
4. add VITE_APP_BACKENDURL for backend url in your .env file which is kept in same directory where src folder is kept
5. npm run dev
6. User Account
   Email: user123@gmail.com,Password: user123
7. Admin Account
   Email: admin123@gmail.com,Password: admin123
