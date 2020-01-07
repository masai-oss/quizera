from .. import db


class Teacher(db.Model):
    """[summary]   
    Args:
        db ([type]): [description]
    """
    __tablename__ = 'teacher'
    teacher_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    teacher_name = db.Column(db.String(250), nullable=False)
    teacher_email = db.Column(db.String(250), unique=True, nullable=False)
    teacher_img = db.Column(db.Text, nullable=True)
    teacher_gender = db.Column(db.String(50), nullable=True)
    teacher_department = db.Column(db.String(250), nullable=True)
    teacher_location = db.Column(db.String(250), nullable=True)
    teacher_contact_number = db.Column(db.Integer, nullable=True)
