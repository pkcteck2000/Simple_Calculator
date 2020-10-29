const toggleMode = () => {
    document.getElementById('calculator-container').classList.toggle('bg-dark');
    document.getElementById('toggle-button').classList.toggle('toggle-button-dark');
    document.getElementsByClassName('fas')[0].classList.toggle('fa-sun');

    Object.values(document.getElementsByClassName('btn')).forEach(val => {
        val.classList.toggle('btn-dark');
    });
    Object.values(document.getElementsByClassName('btn')).forEach(val => {
        val.classList.toggle('btn-circle-dark');
    });
    Object.values(document.getElementsByClassName('answer-text')).forEach(val => {
        val.classList.toggle('text-light');
    });
}

document.getElementById("toggle-button").addEventListener("click", toggleMode);