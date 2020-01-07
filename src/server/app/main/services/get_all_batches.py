from app.main import db
from app.main.models.batch import Batch
from flask import jsonify
import json


def get_all_batches():
    """[summary]    
    
    Returns:
        [type]: [description]
    """
    all_batch = db.session.query(Batch).all()
    db.session.commit()
    items = list()
    for i in all_batch:
        items.append({"batch_id":i.batch_id,"batch_name":i.batch_name})
    response_object = jsonify({"data":items})
    return response_object, 200