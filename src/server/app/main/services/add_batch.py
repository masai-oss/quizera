from app.main import db
from app.main.models.batch import Batch
from flask import jsonify


def add_new_batch(data):
    """[summary]
        
    Args:
        data ([type]): [description]
    
    Returns:
        [type]: [description]
    """
    batch = Batch(
        batch_name = data['batch_name']
    )
    db.session.add(batch)
    db.session.commit()
    response_object = jsonify({"response": "successfully added Batch"})
    return response_object, 200

