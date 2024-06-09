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
});
