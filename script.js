function calculate() {
    const sideLengthInput = document.getElementById('sideLength');
    const areaResult = document.getElementById('areaResult');
    const perimeterResult = document.getElementById('perimeterResult');
    
    const sideLength = parseFloat(sideLengthInput.value);

    if (!isNaN(sideLength)) {
        const area = sideLength * sideLength;
        const perimeter = 4 * sideLength;
        areaResult.textContent = area.toFixed(0);
        perimeterResult.textContent = perimeter.toFixed(0);
    } else {
        areaResult.textContent = 'Invalid';
        perimeterResult.textContent = 'Invalid';
    }
}

function reset() {
    const sideLengthInput = document.getElementById('sideLength');
    const areaResult = document.getElementById('areaResult');
    const perimeterResult = document.getElementById('perimeterResult');

    sideLengthInput.value = '';
    areaResult.textContent = '-';
    perimeterResult.textContent = '-';
}
