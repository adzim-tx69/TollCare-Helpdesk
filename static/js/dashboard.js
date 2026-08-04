// ======================================================
// CLOCK
// ======================================================

const clock = document.getElementById("clock");

function updateClock() {

    if (!clock) return;

    const now = new Date();

    clock.innerHTML = now.toLocaleString("id-ID", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

}

updateClock();

setInterval(updateClock, 1000);


// ======================================================
// SEARCH
// ======================================================

const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");

function filterTable() {

    const keyword = searchInput ? searchInput.value.toLowerCase() : "";
    const status = statusFilter ? statusFilter.value.toLowerCase() : "";

    const rows = document.querySelectorAll("#ticketTable tbody tr");

    rows.forEach((row) => {

        const text = row.innerText.toLowerCase();

        const rowStatus = row.cells[4].innerText.toLowerCase();

        const matchKeyword = text.includes(keyword);

        const matchStatus =
            status === "" || rowStatus.includes(status);

        row.style.display =
            matchKeyword && matchStatus
                ? ""
                : "none";

    });

}

if (searchInput) {

    searchInput.addEventListener("keyup", filterTable);

}

if (statusFilter) {

    statusFilter.addEventListener("change", filterTable);

}


// ======================================================
// CHART
// ======================================================

const chartCanvas = document.getElementById("statusChart");

if (chartCanvas && window.dashboardData) {

    new Chart(chartCanvas, {

        type:"doughnut",

        data: {

            labels: [
                "Open",
                "Diproses",
                "Selesai"
            ],

            datasets: [{

                data: [

                    window.dashboardData.open,

                    window.dashboardData.process,

                    window.dashboardData.done

                ],

                backgroundColor: [

                    "#ef4444",

                    "#f59e0b",

                    "#10b981"

                ],

                hoverOffset: 10,

                borderWidth: 0

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            aspectRatio:2,

            plugins: {

                legend: {

                    position: "bottom",

                    labels: {

                        usePointStyle: true,

                        padding: 20

                    }

                }

            }

        }

    });

}


// ======================================================
// COUNTER ANIMATION
// ======================================================

document.querySelectorAll(".card-info h2").forEach(counter => {

    const target = parseInt(counter.innerText);

    if (isNaN(target)) return;

    let current = 0;

    const speed = Math.max(15, Math.floor(600 / Math.max(target, 1)));

    const timer = setInterval(() => {

        current++;

        counter.innerText = current;

        if (current >= target) {

            counter.innerText = target;

            clearInterval(timer);

        }

    }, speed);

});


// ======================================================
// SIDEBAR ACTIVE
// ======================================================

document.querySelectorAll(".menu li").forEach(item => {

    item.addEventListener("click", function () {

        document.querySelectorAll(".menu li")
            .forEach(menu => menu.classList.remove("active"));

        this.classList.add("active");

    });

});


// ======================================================
// CARD HOVER
// ======================================================

document.querySelectorAll(".card-item").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});