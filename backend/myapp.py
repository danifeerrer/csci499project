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

# Load the saved CNN model
loaded_model = keras.models.load_model("my_cnn_model.h5")



@app.route('/cnn', methods=['POST'])
def predict_mri():
    try:
        # Get the image file from the request
        print("Received a POST request to /cnn")
        image_file = request.files['image']

        # Check if an image file was provided
        if image_file is None:
            return jsonify({'error': 'No image file provided'}), 400

        # Read the image data from the file
        image_data = image_file.read()

        # Load and preprocess the image using PIL and io.BytesIO
        image = Image.open(io.BytesIO(image_data))
        image = image.convert('RGB')  # Ensure that the image is in RGB mode
        image = image.resize((150, 150))  # Resize the image to the desired size
        image = img_to_array(image)
        image = np.expand_dims(image, axis=0)

        # Make predictions using the loaded model
        predictions = loaded_model.predict(image)

        # Assuming you have two classes (no_tumor or tumor)
        class_labels = ['No tumor detected.', 'Tumor detected.']
        predicted_class = class_labels[np.argmax(predictions)]

        print(predicted_class)

        return jsonify({'result': predicted_class})

    except Exception as e:
        return jsonify({'error': str(e)}), 500



if __name__ == '__main__':
    app.run(debug=True, port=5001)
