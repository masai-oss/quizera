from app.main import db
from app.main.models.admin import Admin
from flask import jsonify


def register_new_admin(data):
    """[summary]
      
    Args:
        data ([type]): [description]
    
    Returns:
        [type]: [description]
    """
    new_admin = Admin(
        admin_name = data['admin_name'],

    )
    db.session.add(new_admin)
    db.session.commit()
    response_object = jsonify({"response": "Admin successfully added"})
    return response_object, 200