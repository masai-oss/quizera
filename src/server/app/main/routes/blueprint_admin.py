from flask import Blueprint, request
from app.main.services.register_new_admin import register_new_admin
from app.main.services.add_batch import add_new_batch
from app.main.services.add_section import add_new_section
from app.main.services.add_test_type import add_new_test_type
from app.main.services.delete_batch import delete_batch
from app.main.services.delete_section import delete_section
from app.main.services.delete_test_type import delete_test_type
from app.main.services.get_all_batches import get_all_batches
from app.main.services.get_all_test_type import get_all_test_types
from app.main.services.get_all_sections import get_all_sections
from app.main.services.add_objective_type import add_new_objective_type
from app.main.services.delete_objective_type import delete_objective_type
from app.main.services.get_all_objective_type import get_all_objective_type
from app.main.services.get_all_teachers import get_all_teachers
from app.main.services.get_all_student_batch import get_all_students_batch
from app.main.services.add_student_to_section import add_student_to_section


admin = Blueprint("admin", __name__)

@admin.route("/signup", methods=['POST'])
def signUp():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.json
    return register_new_admin(data)


@admin.route("/add_batch", methods=['POST'])
def addBatch():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.json
    return add_new_batch(data)


@admin.route("/add_section", methods=['POST'])
def addSection():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.json
    return add_new_section(data)


@admin.route("/add_test_type", methods=["POST"])
def addTestType():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.headers
    return add_new_test_type(data)


@admin.route("/add_objective_type", methods=["POST"])
def addObjectiveTestType():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.headers
    return add_new_objective_type(data)


@admin.route("/delete_batch", methods=['DELETE'])
def deleteBatch():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.json
    return delete_batch(data)


@admin.route("/delete_section", methods=['DELETE'])
def deleteSection():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.json
    return delete_section(data)


@admin.route("/delete_section", methods=['DELETE'])
def deleteTestType():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.json
    return delete_test_type(data)


@admin.route("/delete_objective_type", methods=['DELETE'])
def deleteObjectiveType():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.json
    return delete_objective_type(data)


@admin.route("/all_batches", methods=['GET'])
def allBatches():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    return get_all_batches()


@admin.route("/all_sections", methods=['GET'])
def allSections():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.headers
    return get_all_sections(data)


@admin.route("/all_test_types", methods=['GET'])
def allTestTypes():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    return get_all_test_types()


@admin.route("/all_objective_type", methods=['GET'])
def allObjectiveType():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    return get_all_objective_type()


#All Student of Batchwise
@admin.route("/all_teachers", methods=['GET'])
def allTeacher():
    """[summar
    
    Returns:
        [type]: [description]
    """
    return get_all_teachers()

#All Student of Batchwise
@admin.route("/all_students_batchwise", methods=['GET'])
def filterStudentsByBatch():
    """[summar
    
    Returns:
        [type]: [description]
    """
    data = request.headers
    return get_all_students_batch(data)

# Add Student to Section 
@admin.route("/add_student_section",methods=["PUT"])
def addStudentToSection():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.json
    return add_student_to_section(data)
    