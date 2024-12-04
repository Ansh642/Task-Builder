
# **MERN Stack Form Builder**

A powerful and user-friendly form builder application built with the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS. This application allows users to create, edit, preview, and submit forms with various question types such as **Categorize**, **Cloze**, and **Comprehension**.


## **Features**
- **Form Creation**: 
  - Add a title, description, and a header image to the form.
  - Include questions of the following types:
    - **Categorize**: Allows categorization of items.
    - **Cloze**: Fill-in-the-blank type questions.
    - **Comprehension**: Based on understanding a passage.
  - Add images to questions for better context.

- **Form Editing**: 
  - Modify existing forms with an easy-to-use editor.

- **Form Preview & Fill**: 
  - Generate a shareable link for previewing and filling out forms.
  - Save user responses in the backend.

- **Responsive Design**: 
  - Fully responsive layout using Tailwind CSS.

- **Data Persistence**: 
  - Store forms and responses in MongoDB.

---

## **Technology Stack**
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **State Management**: React's useState and Context APIs
- **Other Tools**: Axios for API calls, React Toastify for notifications

---

## **Installation Guide**

### **Prerequisites**
- Node.js (v14 or above)
- MongoDB (running instance)
- npm or yarn

### **1. Clone the Repository**
```bash
git clone https://github.com/your-repo/mern-form-builder.git
cd mern-form-builder
```

### **2. Backend Setup**
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add the following variables:
   ```env
   MONGO_URI=your_mongo_connection_string
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### **3. Frontend Setup**
1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```

### **4. Access the Application**
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)

---

## **Usage**
1. **Creating a Form**:
   - On the homepage, click "Create New Form."
   - Fill in the form title, description, and header image URL.
   - Add questions of the desired types and optionally add images to questions.
   - Save the form to persist it in the database.

2. **Previewing a Form**:
   - Use the generated link to preview or fill out the form.

3. **Submitting Responses**:
   - Fill out the form, and the responses will be saved in the backend.

4. **Notifications**:
   - Success and error messages are displayed using React Toastify.

---

## **Folder Structure**
```plaintext
project-root/
├── backend/
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Express routes for forms and responses
│   ├── controllers/     # Logic for handling API requests
│   ├── server.js        # Entry point for backend
├── frontend/
│   ├── src/
│   │   ├── components/  # React components like FormEditor, FormPreview, Question
│   │   ├── pages/       # Home and PreviewForm
│   │   ├── App.js       # Main application component
│   │   ├── index.js     # React entry point
├── .gitignore           # Files and directories to ignore
├── README.md            # Project documentation
```



