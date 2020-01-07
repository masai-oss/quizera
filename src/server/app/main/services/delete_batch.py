from app.main import db
from app.main.models.batch import Batch
from flask import jsonify


def delete_batch(data):
    """[summary]   
    
    Args:
        data ([type]): [description]
    
    Returns:
        [type]: [description]
    """
    batch = Batch.query.get(int(data["batch_id"]))
    db.session.delete(batch)
    db.session.commit()
    response_object = jsonify({"response": "successfully delete Batch"})
    return response_object, 200