from flask import Flask, jsonify
import random
import time
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/amplitude', methods=['GET'])
def get_amplitude():
    amplitude = random.uniform(-10, 10)
    return jsonify({"amplitude": amplitude})

if __name__ == '__main__':
    app.run(debug=True, port=5000)