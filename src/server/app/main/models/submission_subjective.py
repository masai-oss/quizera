from .. import db
import datetime

class SubmissionSubjective(db.Model):
    """[summary]   
    Args:
        db ([type]): [description]
    """
    __tablename__ = 'submission_subjective'
    submission_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    student_id = db.Column(db.Integer,db.ForeignKey('student.student_id'),nullable=False)    
    question_id = db.Column(db.Integer,db.ForeignKey('subjective_questions.question_id'),nullable=False)
    response = db.Column(db.Text,default=None, nullable=True)
    marks = db.Column(db.Integer,default=None)
    quiz_test_id = db.Column(db.Integer,db.ForeignKey('quizset.test_id'),nullable=False)
    submission_time = db.Column(db.DateTime,onupdate=datetime.datetime.now())
    question = db.relationship('SubjectiveQuestions',backref=db.backref('submission_objective', lazy=True))
    students = db.relationship('Student',backref=db.backref('submission_objective', lazy=True))
    quizset = db.relationship('Quizset',backref=db.backref('submission_objective', lazy=True))