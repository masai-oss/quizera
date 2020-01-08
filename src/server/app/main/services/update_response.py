from app.main import db
from app.main.models.submission_objective import SubmissionObjective
from app.main.models.objective_questions import ObjectiveQuestions
from flask import jsonify


def update_response(data):
    """method to edit teacher profile to the model Teacher

    Args:
        data (dict): data which needs to be stored into teacher table
                    using Teacher model

    Returns:
        dict, int: response object containing appropriate response based on the response from save changes,
                    http response code specifying the success of updating data into table
    """
    student_id = data['student_id']
    question_id = data['question_id']
    response = data['response']
    marks = 0
    query = db.session.query(ObjectiveQuestions).filter_by(
        question_id=question_id)
    print(query)
    for i in query:
        if i.answer.lower() == response.lower():
            marks = i.ObjectiveQuestions.marks
    db.session.query(SubmissionObjective).filter_by(question_id=question_id).filter_by(
        student_id=student_id).update({SubmissionObjective.response: response, SubmissionObjective.marks: marks})
    db.session.commit()
    response_object = jsonify({"response": "Successfully added response"})
    return response_object, 200
