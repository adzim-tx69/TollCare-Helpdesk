from werkzeug.security import generate_password_hash

from app import app
from extensions import db
from models.admin import Admin

with app.app_context():

    admin = Admin.query.filter_by(username="admin").first()

    if admin:
        print("Admin sudah ada.")
    else:
        admin = Admin(
            username="admin",
            password=generate_password_hash("admin123"),
            fullname="Administrator"
        )

        db.session.add(admin)
        db.session.commit()

        print("Admin berhasil dibuat.")