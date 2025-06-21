 🔐 React + Flask Login System

A simple but fully functional **Login System** built with:

- **React** (Frontend)
- **Formik** + **Yup** for form handling and client-side validation
- **Flask** (Backend)
- **Flask-CORS** for cross-origin requests
- **email-validator** for server-side email format validation

---

## 🗂️ Folder Structure

Login-using-flask-and-react/
├── Backend/
│ ├── app.py
│ └── myenv/ # Python virtual environment
├── Frontend/
│ └── client/ # React app (created with create-react-app)
│ ├── src/
│ │ └── Loginpage.js
│ └── package.json
└── README.md

yaml
Copy
Edit

---

## 🚀 How to Run the Project

### ✅ 1. Backend (Flask)

#### 📍 Navigate to the backend folder:

```bash
cd Backend
🔁 Create and activate virtual environment (if not yet):
bash
Copy
Edit
python -m venv myenv
source myenv/bin/activate
📦 Install required Python packages:
bash
Copy
Edit
pip install flask flask-cors email-validator
▶️ Start Flask server:
bash
Copy
Edit
python app.py
You should see:

csharp
Copy
Edit
* Running on http://127.0.0.1:5000/
✅ 2. Frontend (React)
📍 Navigate to the frontend React app folder:
bash
Copy
Edit
cd ../Frontend/client
📦 Install dependencies:
bash
Copy
Edit
npm install
▶️ Start React app:
bash
Copy
Edit
npm start
App runs at: http://localhost:3000

💡 Features
🔐 Login form with real-time validation (email format, password length)

🔄 Frontend + backend communication using fetch

❌ Handles invalid input or login failure

✅ Returns success status on correct credentials

🌐 Supports CORS (React <-> Flask)

🧪 Default Test Users
Inside app.py:

python
Copy
Edit
users = {
    "user@example.com": "password123",
    "admin@test.com": "adminpass"
}
Try logging in with:

json
Copy
Edit
{
  "email": "user@example.com",
  "password": "password123"
}
📁 Flask - app.py Overview
POST /login: Handles login submission

Validates email format using email_validator

Checks credentials against a static user dictionary

Returns success/failure JSON response

📁 React - Loginpage.js Overview
Built with Formik for form handling

Yup for client-side schema validation:

Email must be valid format

Password must be at least 6 characters

On submit:

Sends POST request to Flask

Displays success or error message dynamically

📦 Dependencies
Backend (Python):
bash
Copy
Edit
Flask
flask-cors
email-validator
Frontend (React):
bash
Copy
Edit
formik
yup
Install with:

bash
Copy
Edit
npm install formik yup
🔐 Security Notes (for production)
This demo app is great for learning, but in real applications:

🔒 Never store passwords as plain text. Use werkzeug.security or bcrypt.

🔒 Use HTTPS in production

🔐 Use token-based authentication (JWT) to manage sessions

🔄 Connect to a database instead of hardcoding users

📌 To Do / Next Steps
 Add Signup functionality

 Add password hashing

 Store users in a database (e.g., SQLite, PostgreSQL)

 Add JWT authentication

 Protect private routes

🧑‍💻 Author
Maitai Madness
Full-stack developer in training — with fire in the belly 🔥

📜 License
This project is open-source and free to use for learning and personal projects.

yaml
Copy
Edit

---

Would you like me to generate the actual `requirements.txt` and `package.json` as well? Or should I help you write a `signup` route and hook up to a database next?








