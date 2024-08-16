from flask import Flask, request, jsonify, url_for, Blueprint
from flask_cors import CORS
from flask_mail import Message
from extensions import mail
from api.models import db, User
from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200

# Endpoint para manejar el envío de correos electrónicos
@api.route('/send-email', methods=['POST'])
def send_email():
    data = request.json
    try:
        msg = Message(
            'Form Data Submission',
            sender='ejimenez@kbdlogistics.com',
            recipients=['aestradap17@gmail.com']  # 'Op05@kbdlogistics.com'
        )
        msg.body = f"""
        Name: {data.get('name')}
        Email: {data.get('email')}
        Address: {data.get('address')}
        Phone: {data.get('phone')}
        PD: {"This is a development test, please do not reply."}
        """
        mail.send(msg)
        return jsonify({'status': 'Email sent successfully!'}), 200
    except Exception as e:
        return jsonify({'status': 'Failed to send email', 'error': str(e)}), 500
