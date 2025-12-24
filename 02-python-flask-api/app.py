from flask import Flask, jsonify
import datetime
import os

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({
        "message": "Hello from Docker!",
        "timestamp": str(datetime.datetime.now()),
        "container_id": os.uname()[1]
    })

@app.route('/health')
def health():
    return jsonify({"status": "healthy"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)