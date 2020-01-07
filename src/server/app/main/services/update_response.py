from app.main import db
from app.main.models.submission_objective import SubmissionObjective
from app.main.models.objective_questions import ObjectiveQuestions
from flask import jsonify


def update_response(data):
    """[summary]
        
    Args:
        data ([type]): [description]
    
    Returns:
        [type]: [description]
    """
    student_id = data['student_id']
    question_id = data['question_id']
    response = data['response']
    marks = 0
    query = db.session.query(ObjectiveQuestions).filter_by(question_id = question_id)
    print(query)
    for i in query:
        if i.answer.lower() == response.lower():
            marks = i.ObjectiveQuestions.marks
    db.session.query(SubmissionObjective).filter_by(question_id = question_id).filter_by(student_id = student_id).update({SubmissionObjective.response : response,SubmissionObjective.marks :marks})
    db.session.commit()
    response_object = jsonify({"response": "Successfully added response"})
    return response_object, 200