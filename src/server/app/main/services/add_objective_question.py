from app.main import db
from app.main.models.objective_questions import ObjectiveQuestions
from flask import jsonify


def add_objective_question(data):
    """[summary]
      
    Args:
        data ([type]): [description]
    
    Returns:
        [type]: [description]
    """
    new_question = ObjectiveQuestions(
        question = data['question'],
        option_1 = data['option_1'],
        option_2 = data['option_2'],
        option_3 = data['option_3'],
        option_4 = data['option_4'],
        answer = data['answer'],
        marks = data['marks'],
        teacher_id = data['teacher_id'],
        quiz_test_id = data['quiz_test_id'],
        objective_type_id = data['objective_type_id']
    )
    db.session.add(new_question)
    db.session.commit()
    response_object = jsonify({"response": "successfully added Question"})
    return response_object, 200
