from .. import db


class Student(db.Model):
    """[summary]  
    Args:
        db ([type]): [description]
    """
    __tablename__ = 'student'
    student_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    student_name = db.Column(db.String(250), nullable=False)
    student_batch_id = db.Column(db.Integer,db.ForeignKey('batch.batch_id'),nullable=False)
    student_section_id = db.Column(db.Integer,db.ForeignKey('section.section_id'),nullable=True)
    batch = db.relationship('Batch',backref=db.backref('student', lazy=True))
    section = db.relationship('Section',backref=db.backref('student', lazy=True))