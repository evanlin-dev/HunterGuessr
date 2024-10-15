from flask import Flask, request, send_file, jsonify
import mysql.connector
import os
import base64
from flask_cors import CORS

ID = 0
app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = 'ImageOutputs'

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

try:
    MyDB = mysql.connector.connect(
        host="sql5.freesqldatabase.com",
        user="sql5735651",
        passwd="eeJBFYQKYU",
        database="sql5735651",
        port="3306"
    )

    MyCursor = MyDB.cursor()
    MyCursor.execute("""
        CREATE TABLE IF NOT EXISTS Images (
            id INTEGER(45) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            file_name VARCHAR(255) NOT NULL,
            Photo LONGBLOB NOT NULL
        )
    """)
except mysql.connector.Error as e:
    print(f"Database connection or setup failed: {str(e)}")

def InsertBlob(FilePath, FileName):
    try:
        with open(FilePath, "rb") as File:
            BinaryData = File.read()
        SQLStatement = "INSERT INTO Images (file_name, Photo) VALUES (%s, %s)"
        MyCursor.execute(SQLStatement, (FileName, BinaryData))
        MyDB.commit()
    except mysql.connector.Error as e:
        print(f"Failed to insert blob: {str(e)}")

def RetrieveBlob(ID):
    try:
        SQLStatement2 = "SELECT * FROM Images WHERE id = %s"
        MyCursor.execute(SQLStatement2, (ID,))
        MyResult = MyCursor.fetchone()
        if MyResult:
            StoreFilePath = os.path.join(UPLOAD_FOLDER, MyResult[1])
            with open(StoreFilePath, "wb") as File:
                File.write(MyResult[2])
            return StoreFilePath
        else:
            return None
    except mysql.connector.Error as e:
        print(f"Failed to retrieve blob: {str(e)}")
        return None

@app.route('/insert_image', methods=['POST'])
def insert_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    file_name = file.filename
    binary_data = file.read()

    try:
        SQLStatement = "INSERT INTO Images (file_name, Photo) VALUES (%s, %s)"
        MyCursor.execute(SQLStatement, (file_name, binary_data))
        MyDB.commit()
        new_id = MyCursor.lastrowid
        return jsonify({'message': 'Image inserted successfully', 'id': new_id, 'file_name': file_name}), 200
    except mysql.connector.Error as e:
        return jsonify({'error': f'Failed to save the image: {str(e)}'}), 500

@app.route('/retrieve_image/<int:id>', methods=['GET'])
def retrieve_image(id):
    try:
        image_path = RetrieveBlob(id)
        if image_path:
            return send_file(image_path, mimetype='image/jpeg')
        else:
            return jsonify({'error': 'Image not found'}), 404
    except Exception as e:
        return jsonify({'error': f'Failed to retrieve image: {str(e)}'}), 500

@app.route('/delete_image/<int:id>', methods=['DELETE'])
def delete_image(id):
    try:
        SQLStatementCheck = "SELECT * FROM Images WHERE id = %s"
        MyCursor.execute(SQLStatementCheck, (id,))
        result = MyCursor.fetchone()

        if not result:
            return jsonify({'error': 'Image not found'}), 404

        SQLStatementDelete = "DELETE FROM Images WHERE id = %s"
        MyCursor.execute(SQLStatementDelete, (id,))
        MyDB.commit()
        
        return jsonify({'message': 'Image deleted successfully'}), 200
    except mysql.connector.Error as e:
        return jsonify({'error': f'Failed to delete image: {str(e)}'}), 500

@app.route('/retrieve_all_images', methods=['GET'])
def retrieve_all_images():
    try:
        SQLStatement = "SELECT id, Photo From Images"
        MyCursor.execute(SQLStatement)
        Result = MyCursor.fetchall()
        imagesAndIds = []
        for row in Result:
            image_id = row[0]
            photo = base64.b64encode(row[1]).decode('utf-8')
            imagesAndIds.append({'id': image_id, 'photo': photo})
        return jsonify(imagesAndIds), 200
    except mysql.connector.Error as e:
        return jsonify({'error': f'Failed to retrieve images: {str(e)}'}), 500

@app.route('/delete_all_images', methods=['DELETE'])
def delete_all_images():
    try:
        SQLStatement = "DELETE FROM Images"
        MyCursor.execute(SQLStatement)
        MyDB.commit()
        return jsonify({'message': 'All images deleted successfully'}), 200
    except mysql.connector.Error as err:
        MyDB.rollback() 
        return jsonify({'error': f'Failed to delete images: {str(err)}'}), 500

@app.route('/GrabImageForGuessing', methods=['GET'])
def retrieve_image_for_guessing():
    try:
        SQLStatement = "SELECT id, Photo FROM Images ORDER BY RAND() LIMIT 1"
        MyCursor.execute(SQLStatement)
        result = MyCursor.fetchone()
        
        if not result:
            return jsonify({'error': 'No images found'}), 404
        
        image_id = result[0]
        photo = base64.b64encode(result[1]).decode('utf-8')
        
        return jsonify({'id': image_id, 'photo': photo}), 200
    except mysql.connector.Error as err:
        return jsonify({'error': f'Failed to retrieve image: {str(err)}'}), 500

@app.route('/AmountOfImages', methods=['GET'])
def amount_of_images():
    try:
        SQLStatement = "SELECT COUNT(*) FROM Images"
        MyCursor.execute(SQLStatement)
        result = MyCursor.fetchone()
        return jsonify({'count': result[0]}), 200
    except mysql.connector.Error as err:
        return jsonify({'error': f'Failed to retrieve amount of images: {str(err)}'}), 500


if __name__ == '__main__':
    try:
        app.run(host='0.0.0.0', port=5000, debug=True)
    except Exception as e:
        print(f"Failed to start the server: {str(e)}")