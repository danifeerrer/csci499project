from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow import keras
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np
import io
import joblib
from PIL import Image

app = Flask("Application")
CORS(app)

loaded_model = joblib.load("strokeML.pkl")


@app.route('/stroke', methods=['POST'])
def predict_stroke():
    try:
        # Get input data from the request
        data = request.get_json()

        # Ensure all required fields are present and convert to integers
        required_fields = ["age", "hypertension", "heartDisease", "glucoseLevel", "bmi"]
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing field: {field}'}), 400
            try:
                data[field] = int(data[field])  # Convert to integers
            except ValueError:
                return jsonify({'error': f'{field} must be an integer'}), 400

        # Prepare the input data for prediction
        input_data = np.array([
            data["age"],
            data["hypertension"],
            data["heartDisease"],
            data["glucoseLevel"],
            data["bmi"]
        ]).reshape(1, -1)

        # Make predictions using the loaded model
        stroke_probability = loaded_model.predict_proba(input_data)[:, 1][0]

        return jsonify({'stroke_probability': stroke_probability})

    except Exception as e:
        return jsonify({'error': str(e)}), 500
        
if __name__ == '__main__':
    app.run(debug=True)