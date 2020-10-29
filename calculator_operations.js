let result = "";

const evaluate = () => {
    try {
        result = eval(result);
        result = Number.isInteger(result) ? eval(result) : eval(result).toFixed(4);
    }
    catch (error) {
        //result = error;
        result = "Error"
    }
}

const calculate = (op) => {
    if (op === 'AC') {
        result = "";
    }
    else if (op === '=') {
        evaluate();
    }
    else if (op === '+/-') {
        result = result * -1;
    }
    else {
        result += op;
    }

    document.getElementById('answer-text').innerHTML = result ? result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0;
}

document.getElementById('answer-text').innerHTML = 0;