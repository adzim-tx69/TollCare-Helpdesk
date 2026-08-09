from datetime import datetime
from zoneinfo import ZoneInfo

from extensions import db


# =====================================================
# TIMEZONE WIB
# =====================================================

WIB = ZoneInfo("Asia/Jakarta")


def waktu_wib():
    return datetime.now(WIB).replace(tzinfo=None)


class Ticket(db.Model):

    __tablename__ = "tickets"


    id = db.Column(
        db.Integer,
        primary_key=True
    )


    ticket_number = db.Column(
        db.String(30),
        unique=True,
        nullable=False
    )


    fullname = db.Column(
        db.String(100),
        nullable=False
    )


    phone = db.Column(
        db.String(20),
        nullable=False
    )


    toll_gate = db.Column(
        db.String(100),
        nullable=False
    )


    category = db.Column(
        db.String(100),
        nullable=False
    )


    description = db.Column(
        db.Text,
        nullable=False
    )


    # ==========================
    # FOTO LAPORAN
    # ==========================

    photo = db.Column(
        db.String(255),
        nullable=True
    )


    # ==========================
    # FOTO PERBAIKAN
    # ==========================

    repair_photo = db.Column(
        db.String(255),
        nullable=True
    )


    # ==========================
    # TEKNISI
    # ==========================

    technician = db.Column(
        db.String(100),
        nullable=True
    )


    # ==========================
    # CATATAN PERBAIKAN
    # ==========================

    repair_note = db.Column(
        db.Text,
        nullable=True
    )


    # ==========================
    # STATUS
    # ==========================

    status = db.Column(
        db.String(20),
        default="Open"
    )


    # ==========================
    # WAKTU DIBUAT - WIB
    # ==========================

    created_at = db.Column(
        db.DateTime,
        default=waktu_wib
    )


    # ==========================
    # WAKTU SELESAI - WIB
    # ==========================

    completed_at = db.Column(
        db.DateTime,
        nullable=True
    )