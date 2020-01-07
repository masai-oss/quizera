from .. import db


class TestType(db.Model):
    """[summary]   
    Args:
        db ([type]): [description]
    """
    __tablename__ = 'test_type'
    type_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    test_type_name = db.Column(db.String(250), unique=True, nullable=False)