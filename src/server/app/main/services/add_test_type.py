from app.main import db
from app.main.models.test_type import TestType
from flask import jsonify


def add_new_test_type(data):
    """[summary]
      
    Args:
        data ([type]): [description]
    
    Returns:
        [type]: [description]
    """
    test_type = TestType(
        test_type_name = data['test_type_name']
    )
    db.session.add(test_type)
    db.session.commit()
    response_object = jsonify({"response": "successfully added"})
    return response_object, 200
