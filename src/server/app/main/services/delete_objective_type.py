from app.main import db
from app.main.models.objective_type import ObjectiveType
from flask import jsonify


def delete_objective_type(data):
    """[summary]   
    
    Args:
        data ([type]): [description]
    
    Returns:
        [type]: [description]
    """
    objective_type = ObjectiveType.query.get(int(data["objective_type_id"]))
    db.session.delete(objective_type)
    db.session.commit()
    response_object = jsonify({"response": "successfully delete Batch"})
    return response_object, 200