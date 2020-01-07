from flask import Blueprint, request
from app.main.services.register_new_teacher import register_new_teacher
from app.main.services.add_quizset_teacher import add_quizset_teacher
from app.main.services.show_quizset_teacher import show_quizset
from app.main.services.publish_quiz import publish_quiz
from app.main.services.add_objective_question import add_objective_question
from app.main.services.edit_teacher_profile import edit_teacher_profile

teacher = Blueprint("teacher", __name__)


@teacher.route("/signup", methods=['POST'])
def signUp():
    """[summary]

    Returns:
        [type]: [description]
    """
    data = request.json
    return register_new_teacher(data)


@teacher.route("/add_quiz_details", methods=['POST'])
def addQuiz():
    """[summary]

    Returns:
        [type]: [description]
    """
    data = request.headers
    return add_quizset_teacher(data)


@teacher.route("/show_quiz_details", methods=['GET'])
def showQuizset():
    """[summary]

    Returns:
        [type]: [description]
    """
    data = request.headers
    return show_quizset(data)


@teacher.route("/publish_quiz", methods=['POST'])
def publishQuiz():
    """[summary]

    Returns:
        [type]: [description]
    """
    data = request.headers
    return publish_quiz(data)


@teacher.route("/add_objective_question", methods=['POST'])
def addObjectiveQuestion():
    """[summary]

    Returns:
        [type]: [description]
    """
    data = request.headers
    return add_objective_question(data)


@teacher.route("/edit_teacher_profile", methods=['POST'])
def addProfileTeacher():
    """[summary]

    Returns:
        [type]: [description]
    """
    data = request.headers
    return edit_teacher_profile(data)
