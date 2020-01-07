from app.main import db
from app.main.models.student import Student
from flask import jsonify


def register_new_student(data):
    """[summary]
      
    Args:
        data ([type]): [description]
    
    Returns:
        [type]: [description]
    """
    new_student = Student(
        student_name = data['student_name'],
        student_batch_id = data['student_batch_id']
    )
    db.session.add(new_student)
    db.session.commit()
    response_object = jsonify({"response": "Student successfully added"})
    return response_object, 200