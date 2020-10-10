import './ui.css';
let resultEl = document.getElementById('result');
document.getElementById('selected-frame').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'selected-frame' } }, '*');
    resultEl.innerHTML = null;
};
document.getElementById('reset').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'resize-small' } }, '*');
    resultEl.innerHTML = null;
};
onmessage = (event) => {
    let data = event.data.pluginMessage;
    let dataFormatted = "easeOutput" in data ? `
      <h4>Frame: ${data.name}</h4>
      <pre>cubic-bezier(${data.easeOutput.x1.toFixed(2)}, ${data.easeOutput.x2.toFixed(2)}, ${data.easeOutput.y1.toFixed(2)}, ${data.easeOutput.y2.toFixed(2)})</pre>
      <br/>
    ` : `
      <h4>Frame: ${data.name}</h4>
      <pre>${data.message}</pre>
      <br/>
    `;
    resultEl.innerHTML += dataFormatted;
};
