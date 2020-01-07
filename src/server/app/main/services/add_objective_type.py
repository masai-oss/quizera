from app.main import db
from app.main.models.objective_type import ObjectiveType
from flask import jsonify


def add_new_objective_type(data):
    """[summary]
      
    Args:
        data ([type]): [description]
    
    Returns:
        [type]: [description]
    """
    objective_test_type = ObjectiveType(
        objective_type = data['objective_type']
    )
    db.session.add(objective_test_type)
    db.session.commit()
    response_object = jsonify({"response": "successfully added"})
    return response_object, 200
