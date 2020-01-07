from app.main import db
from app.main.models.quizset import Quizset
from flask import jsonify


def add_new_quizset(data):
    """[summary]
      
    Args:
        data ([type]): [description]
    
    Returns:
        [type]: [description]
    """
    quizset = Quizset(
        test_name = data['test_name'],
        teacher_id = data['teacher_id'],
        test_type_id = data['test_type_id'],
        student_section_id = data['student_section_id'],
        time_full_test = data['time_full_test'],
        student_batch_id = data['student_batch_id'],
        flag_publish_test = data['flag_publish_test'],
        flag_jumble_question = data['flag_jumble_question']

    )
    db.session.add(quizset)
    db.session.commit()
    response_object = jsonify({"response": "successfully added"})
    return response_object, 200
