from app.main import db
from app.main.models.teacher import Teacher
from flask import jsonify


def register_new_teacher(data):
    """[summary]
      
    Args:
        data ([type]): [description]
    
    Returns:
        [type]: [description]
    """
    new_teacher = Teacher(
        teacher_name = data['teacher_name']

    )
    db.session.add(new_teacher)
    db.session.commit()
    response_object = jsonify({"response": "Teacher successfully added"})
    return response_object, 200