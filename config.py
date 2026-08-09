import os
from dotenv import load_dotenv

load_dotenv()


class Config:

    SECRET_KEY = os.getenv(
        "SECRET_KEY",
        "supersecretkey"
    )

    SQLALCHEMY_DATABASE_URI = os.getenv(
        "MYSQL_PUBLIC_URL"
    )

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # ==========================
    # SESSION CONFIG
    # ==========================

    SESSION_COOKIE_NAME = "tollcare_session"

    SESSION_COOKIE_HTTPONLY = True

    SESSION_COOKIE_SECURE = False

    SESSION_COOKIE_SAMESITE = "Lax"

    PERMANENT_SESSION_LIFETIME = 7200

    # ==========================
    # UPLOAD
    # ==========================

    UPLOAD_FOLDER = "uploads"

    MAX_CONTENT_LENGTH = 10 * 1024 * 1024
