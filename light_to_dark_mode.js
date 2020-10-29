const toggleMode = () => {
    document.getElementById('calculator-container').classList.toggle('bg-dark');
    document.getElementsByClassName('fas')[0].classList.toggle('fa-sun');
    document.getElementById('toggle-button').classList.toggle('toggle-button-dark');

    Object.values(document.getElementsByClassName('btn')).forEach(val => {
        val.classList.toggle('btn-dark');
    });
    Object.values(document.getElementsByClassName('btn')).forEach(val => {
        val.classList.toggle('btn-circle-dark');
    });
    Object.values(document.getElementsByClassName('number')).forEach(val => {
        val.classList.toggle('number-dark');
    });
}

document.getElementById("toggle-button").addEventListener("click", toggleMode);