from .. import db


class Todo(db.Model):
    """SQLAlchemy model for Todo items
    containing fileds id and todo_item 
    id: unique identifier
    todo_item: the todo item to be added to the database

    Args:
        db (object): SQLAlchemy object imported from main 
    """
    __tablename__ = 'todo'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    todo_item = db.Column(db.String(250), nullable=False)
