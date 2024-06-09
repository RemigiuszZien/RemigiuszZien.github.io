document.addEventListener('DOMContentLoaded', function () {
    const individualSelection = document.getElementById('individual');
    const companySelection = document.getElementById('company');
    const individualForm = document.getElementById('individual-form');
    const companyForm = document.getElementById('company-form');

    if (individualSelection && companySelection && individualForm && companyForm) {
        individualSelection.addEventListener('click', function () {
            individualForm.classList.remove('hidden');
            companyForm.classList.add('hidden');
        });

        companySelection.addEventListener('click', function () {
            companyForm.classList.remove('hidden');
            individualForm.classList.add('hidden');
        });
    }

    // Adding the calculateSummary function
    document.getElementById('reservation-form').addEventListener('submit', function (event) {
        event.preventDefault();
        calculateSummary();
    });

    function calculateSummary() {
        const date = document.getElementById('date').value;
        const startTime = document.getElementById('start-time').value;
        const endTime = document.getElementById('end-time').value;
        const participants = document.getElementById('participants').value;
        const field = document.getElementById('field').value;

        const pricePerHour = 200; // Cena za godzinę
        const start = new Date(`1970-01-01T${startTime}:00`);
        const end = new Date(`1970-01-01T${endTime}:00`);
        const duration = (end - start) / (1000 * 60 * 60); // Konwersja z ms do godzin
        const price = duration * pricePerHour;

        document.getElementById('summary-date').innerText = date;
        document.getElementById('summary-start-time').innerText = startTime;
        document.getElementById('summary-end-time').innerText = endTime;
        document.getElementById('summary-participants').innerText = participants;
        document.getElementById('summary-field').innerText = field;
        document.getElementById('summary-price').innerText = price;
    }
});
