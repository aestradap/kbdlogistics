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
    print("Payload received:", data)
    output = ""
    sections = {
        "1": "Info",
        "2": "Details",
        "3": "Preferences",
        "4": "Comments"
    }

    try:
        msg = Message(
            'Form Data Submission',
            sender='ejimenez@kbdlogistics.com',
            recipients=['aestradap17@gmail.com', 'Op02@kbdlogistics.com']
        )

        for item in data:
            print("Processed item:", item)
            if isinstance(item, dict):
                for key, value in item.items():
                    if key in sections:
                        output += f"<br><strong>{key}. {sections[key]}</strong><br>"
                    elif key == "manyDifDimeCargo" and isinstance(value, list):
                        output += "<br><strong>Cargo Dimensions:</strong><br>"
                        for idx, dim in enumerate(value, start=1):
                            if isinstance(dim, dict):
                                output += (f"<br>&nbsp;&nbsp;Dimension {idx}:<br>"
                                           f"&nbsp;&nbsp;&nbsp;&nbsp;Long: {dim.get('long', 'N/A')}<br>"
                                           f"&nbsp;&nbsp;&nbsp;&nbsp;High: {dim.get('high', 'N/A')}<br>"
                                           f"&nbsp;&nbsp;&nbsp;&nbsp;Wide: {dim.get('wide', 'N/A')}<br>"
                                           f"&nbsp;&nbsp;&nbsp;&nbsp;Weight: {dim.get('weight', 'N/A')}<br>")
                            else:
                                output += f"<br>&nbsp;&nbsp;Invalid dimension format.<br>"
                    else:
                        output += f"{key}: {value or 'N/A'}<br>"
            else:
                output += "<br>Invalid item format.<br>"

        msg_body = f"""
        <html>
        <body>
            <p>Here is the data submitted:</p>
            {output}
        </body>
        </html>
        """

        msg.html = msg_body  # Usar HTML en lugar de texto plano

        mail.send(msg)
        return jsonify({'status': 'Email sent successfully!'}), 200

    except Exception as e:
        return jsonify({'status': 'Failed to send email', 'error': str(e)}), 500

# Endpoint para manejar el envío informacion de contacto al email
@api.route('/send-contact-email', methods=['POST'])
def send_contact_email():
    data = request.json
    print("Contact payload received:", data)

    try:
        msg = Message(
            'New Contact Request',
            sender='ejimenez@kbdlogistics.com',
            recipients=['aestradap17@gmail.com', 'Op02@kbdlogistics.com']
        )

        # Formatear la información de contacto
        name = data.get('name', 'No name provided')
        email = data.get('email', 'No email provided')
        phone = data.get('phone', 'No phone provided')
        message = data.get('message', 'No message provided')

        msg_body = f"""
        <html>
        <body>
            <p>New contact request received:</p>
            <strong>Name:</strong> {name}<br>
            <strong>Email:</strong> {email}<br>
            <strong>Phone:</strong> {phone}<br>
            <strong>Message:</strong> {message}<br>
        </body>
        </html>
        """

        msg.html = msg_body  # Usar HTML en el cuerpo del mensaje

        mail.send(msg)
        return jsonify({'status': 'Contact email sent successfully!'}), 200

    except Exception as e:
        return jsonify({'status': 'Failed to send contact email', 'error': str(e)}), 500

# @api.route('/send-email', methods=['POST'])
# def send_email():
#     data = request.json
#     print("Payload received:", data)
#     output = ""
#     sections = {
#         "1": "Info",
#         "2": "Details",
#         "3": "Preferences",
#         "4": "Comments"
#     }
#
#     try:
#         msg = Message(
#             'Form Data Submission',
#             sender='ejimenez@kbdlogistics.com',
#             recipients=['aestradap17@gmail.com']  # Cambia esto a la dirección deseada
#         )
#
#         # Agregar la sección y el contenido del mensaje
#         for item in data.get('finalQuote', []):
#             for key, value in item.items():
#                 if key in sections:
#                     output += f"{key}. {sections[key]}\n"
#                 else:
#                     output += f"{key}: {value}\n"
#
#         msg_body = output
#
#         msg.body = f"""
#         Here is the data submitted:\n
#         {msg_body}
#         """
#
#         mail.send(msg)
#         return jsonify({'status': 'Email sent successfully!'}), 200
#
#     except Exception as e:
#         return jsonify({'status': 'Failed to send email', 'error': str(e)}), 500
