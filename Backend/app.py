from flask import Flask,request,jsonify
from flask_cors import CORS 
from email_validator import validate_email, EmailNotValidError

app=Flask(__name__)
CORS(app)

users={
    "user@example.com": "password123",
    "itsjustmaitai":"1234567"
}

@app.route('/login', methods=['GET'])
def login():
    data=request.get_json()

    if not data or "email" not in data or "password" not in data:
        return jsonify({"message": "Email and password are required"}), 400
    
    email=data.get('email')
    password=data.get('password')

    try:
        validate_email(email)
    except EmailNotValidError:
        return jsonify({"message": "Invalid email format"}), 400
    
    if email in users and users[email]==password:
        return jsonify ({'message':'Login successful','status':'Success'})
    else:
        return jsonify ({'message':'Login failed','status':'Failed'})