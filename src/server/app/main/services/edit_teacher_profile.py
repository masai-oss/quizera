from app.main import db
from app.main.models.teacher import Teacher
from flask import jsonify
import json


def edit_teacher_profile(data):
    """
    Args:
        data([type]): [description]

    Returns:
        [type]: [description]
    """
    teacher_id = data['teacher_id']
    teacher_gender = data['teacher_gender']
    teacher_department = data['teacher_department']
    teacher_location = data['teacher_location']
    teacher_contact_number = data['teacher_contact_number']

    db.session.query(Teacher).filter_by(teacher_id=teacher_id).update(
        {Teacher.teacher_gender: teacher_gender, Teacher.teacher_department: teacher_department, Teacher.teacher_location: teacher_location, Teacher.teacher_contact_number: teacher_contact_number})
    db.session.commit()
    response_object = jsonify(
        {"response": "Successfully added teacher details"})
    return response_object, 200
