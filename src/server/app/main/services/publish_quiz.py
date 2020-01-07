from app.main import db
from app.main.models.quizset import Quizset
from flask import jsonify


def publish_quiz(data):
    """[summary]
        
    Args:
        data ([type]): [description]
    
    Returns:
        [type]: [description]
    """
    teacher_id = data['teacher_id']
    test_id = data['test_id']
    db.session.query(Quizset).filter_by(teacher_id = teacher_id).filter_by(test_id = test_id).update({Quizset.flag_publish_test : 1})
    db.session.commit()
    response_object = jsonify({"response": "successfully Publish Quiz"})
    return response_object, 200