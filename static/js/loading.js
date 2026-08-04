// =========================================
// LOADING SPINNER
// =========================================

const loading = document.getElementById("loading");

// ===============================
// Menampilkan Loading
// ===============================
function showLoading() {

    if (!loading) return;

    loading.style.display = "flex";
    loading.style.opacity = "1";

}

// ===============================
// Menyembunyikan Loading
// ===============================
function hideLoading() {

    if (!loading) return;

    loading.style.opacity = "0";

    setTimeout(() => {

        loading.style.display = "none";

    }, 250);

}

// ===============================
// Saat halaman selesai dibuat
// ===============================
document.addEventListener("DOMContentLoaded", function () {

    hideLoading();

});

// ===============================
// Saat semua resource selesai dimuat
// ===============================
window.addEventListener("load", function () {

    hideLoading();

});

// ===============================
// Saat Form dikirim
// ===============================
document.querySelectorAll("form").forEach(form => {

    form.addEventListener("submit", function () {

        showLoading();

    });

});

// ===============================
// Saat Link diklik
// ===============================
document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        // Link kosong
        if (!href || href === "#" || href.startsWith("javascript")) {
            return;
        }

        // Jangan loading untuk download PDF & Excel
        if (
            href.includes("/admin/export/pdf") ||
            href.includes("/admin/export/excel")
        ) {
            return;
        }

        // Jangan loading jika buka tab baru
        if (
            this.target === "_blank" ||
            this.hasAttribute("download")
        ) {
            return;
        }

        showLoading();

    });

});

// ===============================
// Saat tombol Back / Forward Browser
// ===============================
window.addEventListener("pageshow", function () {

    hideLoading();

});