# Fullstack Project README

This repository contains a full-stack project that includes both frontend and backend components. The project utilizes technologies such as Python, Flask, Node.js, and React. The backend includes machine learning models for predicting brain tumors, strokes, and heart diseases.

## Getting Started

### Prerequisites

- [Python](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/danifeerrer/csci499project.git
    ```

2. **Navigate to the backend folder:**

    ```bash
    cd csci499project/backend
    ```

3. **Create and activate a Python virtual environment:**

    ```bash
    python -m venv venv
    source venv/bin/activate   # On Windows, use `venv\Scripts\activate`
    ```

4. **Install required Python packages:**

    

    Install the following packages:
    - scikit-learn
    - keras
    - tensorflow
    - Flask
    - Cors
    - matplotlib
    - pandas

5. **Run the database setup (assuming you have Node.js installed):**

    ```bash
    cd database
    node database.js
    ```

    Make sure to install Express dependencies:

    ```bash
    npm install
    ```

### Running the Application

#### Backend:



1. **To run the machine learning models for brain tumors, strokes, and heart diseases:**

    - **Brain Tumor Model:**

        ```bash
        python myapp.py
        ```

    - **Stroke Predictor:**

        ```bash
        python stroke.py
        ```

    - **Heart Disease Predictor:**

        ```bash
        python Hdisease.py
        ```

#### Frontend:

1. **Navigate to the frontend folder:**

    ```bash
    cd csci499project/frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the React application:**

    ```bash
    npm start
    ```

Visit [http://localhost:3000](http://localhost:3000) in your web browser to view the full application.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.
