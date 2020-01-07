from .. import db


class Admin(db.Model):
    """[summary]   
    Args:
        db ([type]): [description]
    """
    __tablename__ = 'admin'
    admin_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    admin_name = db.Column(db.String(250), unique=True, nullable=False)