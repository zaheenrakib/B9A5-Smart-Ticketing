function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function showButtonById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('btn-disabled');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-400');
}

function setInnerText(elementId,value){
    document.getElementById(elementId).innerText = value;
}

function totalCost (elementId,value){
    const totalCost = document.getElementById(elementId).innerText;
        const convertTotal = parseInt(totalCost) + parseInt(value);
    setInnerText(elementId , convertTotal);
}
function gradTotalCost (elementId,value){
    const totalCost = document.getElementById(elementId).innerText;
        const convertTotal = parseInt(totalCost) + parseInt(value);
    setInnerText(elementId , convertTotal);
}