from app import app
from extensions import db
from models.admin import Admin
from werkzeug.security import generate_password_hash


with app.app_context():

    admin = Admin.query.filter_by(
        username="admin"
    ).first()


    if admin:

        admin.password = generate_password_hash(
            "123456"
        )

        db.session.commit()

        print("Password admin berhasil diganti menjadi 123456.")

    else:

        print("Admin tidak ditemukan.")