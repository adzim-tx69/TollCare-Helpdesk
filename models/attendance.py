from datetime import datetime
from zoneinfo import ZoneInfo

from extensions import db


WIB = ZoneInfo("Asia/Jakarta")


def waktu_wib():
    return datetime.now(WIB).replace(tzinfo=None)


class Attendance(db.Model):

    __tablename__ = "attendances"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    admin_id = db.Column(
        db.Integer,
        nullable=False
    )

    attendance_date = db.Column(
        db.Date,
        nullable=False
    )

    check_in = db.Column(
        db.DateTime,
        nullable=True
    )

    check_out = db.Column(
        db.DateTime,
        nullable=True
    )

    status = db.Column(
        db.String(20),
        default="Hadir"
    )

    created_at = db.Column(
        db.DateTime,
        default=waktu_wib
    )