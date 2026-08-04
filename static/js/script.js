// =====================================
// TollCare Helpdesk
// script.js
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ TollCare Helpdesk Ready");

    // Tombol Buat Laporan
    const reportButton = document.querySelector('a[href="/report"]');

    if (reportButton) {

        reportButton.addEventListener("click", function () {

            console.log("Menuju halaman Buat Laporan...");

        });

    }

});