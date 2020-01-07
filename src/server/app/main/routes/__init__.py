from .blueprint_todo import todo
from .blueprint_admin import admin
from .blueprint_student import student
from .blueprint_teacher import teacher

def register_blueprints(app):
    app.register_blueprint(todo, url_prefix="/todo")
    app.register_blueprint(admin, url_prefix="/admin")
    app.register_blueprint(student, url_prefix="/student")
    app.register_blueprint(teacher, url_prefix="/teacher")

