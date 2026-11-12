
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/", methods=["GET"])
def home():
    return "Flask Backend is running!"

@app.route("/submit", methods=["POST"])
def submit():
    data = request.get_json()

    if not data:
        return jsonify({
            "error": "No data received"
        }), 400

    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    course = data.get("course", "").strip()

    if not name or not email or not course:
        return jsonify({
            "error": "All fields are required"
        }), 400

    return jsonify({
        "message": "Student registered successfully!",
        "student": {
            "name": name,
            "email": email,
            "course": course
        }
    }), 201

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
