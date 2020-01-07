from flask import Blueprint, request
from app.main.services.todo_services import add_new_todo

todo = Blueprint("todo", __name__)


@todo.route("/")
def home():
    return "home"


@todo.route("/create", methods=['POST'])
def create():
    data = request.json
    print(request.json)
    return add_new_todo(data)
