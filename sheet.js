const scriptURL = "https://script.google.com/macros/s/AKfycbzhhk2e5pV4FsRwSC-R92Qg4fF3o5CTzsXwJnIjWrxdtoCAovmWUa67Z9bNzlLnzIdY/exec";

const form = document.forms['contact-form'];
const spinner = document.getElementById('loading-spinner');

form.addEventListener('submit', e => {
    e.preventDefault();
    spinner.style.display = 'block'; // Show spinner

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            spinner.style.display = 'none'; // Hide spinner
            alert("Thank you! your form is submitted successfully.");
            form.reset(); // Reset form fields after submission
        })
        .catch(error => {
            console.error('Error!', error.message);
            spinner.style.display = 'none'; // Hide spinner in case of an error
        });
});