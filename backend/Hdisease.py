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

loaded_model = joblib.load("hdisease_model.pkl")  # Load your heart disease model (replace with your actual model file)

@app.route('/heart_disease', methods=['POST'])
def predict_heart_disease():
    try:
        # Get input data from the request
        data = request.get_json()

        # Ensure all required fields are present and convert to integers/floats
        required_fields = ["age", "bp", "cholesterol", "fbs", "maxhr"]
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing field: {field}'}), 400
            try:
                data[field] = int(data[field]) if field != 'cholesterol' else float(data[field])  # Convert to integers or floats
            except ValueError:
                return jsonify({'error': f'{field} must be a number'}), 400

        # Prepare the input data for prediction
        input_data = np.array([
            data["age"],
            data["bp"],
            data["cholesterol"],
            data["fbs"],
            data["maxhr"]
        ]).reshape(1, -1)

        # Make predictions using the loaded model
        prediction = loaded_model.predict(input_data)[0]

        # Translate the prediction to a meaningful response
        result = "No heart disease detected." if prediction == 'Absence' else "Heart Disease detected."

        return jsonify({'heart_disease_prediction': result})

    except Exception as e:
        return jsonify({'error': str(e)}), 500
        
if __name__ == '__main__':
    app.run(debug=True)
