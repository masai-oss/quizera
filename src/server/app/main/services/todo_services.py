from app.main import db
from app.main.models.todo import Todo

from flask import jsonify


def add_new_todo(data):
    """method to add todo to the model Todo

    Args:
        data (dict): data which needs to be stored into Todo table
                    using Todo model

    Returns:
        dict, int: response object containing appropriate response based on the response from save changes,
                    http response code specifying the success or failure of storing data into table 
    """
    todo = Todo(
        todo_item=data['todo']
    )
    save_changes(todo)
    response_object = jsonify({"response": "successfully added todo"})
    return response_object, 200


def save_changes(data):
    db.session.add(data)
    db.session.commit()
