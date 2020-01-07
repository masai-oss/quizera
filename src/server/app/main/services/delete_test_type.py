from app.main import db
from app.main.models.test_type import TestType
from flask import jsonify


def delete_test_type(data):
    """[summary]    
    
    Args:
        data ([type]): [description]
    
    Returns:
        [type]: [description]
    """
    test_type = TestType.query.get(int(data["test_type_id"]))
    db.session.delete(test_type)
    db.session.commit()
    response_object = jsonify({"response": "successfully delete Test_type"})
    return response_object, 200