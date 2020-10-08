let resultEl = document.getElementById('result');
document.getElementById('selected-frame').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'selected-frame' } }, '*');
    resultEl.innerHTML = null;
};
onmessage = (event) => {
    console.log("got this from the plugin code", event.data.pluginMessage);
    let data = event.data.pluginMessage;
    let dataFormatted = "easeOutput" in data ? `
      <h4>${data.name}</h4>
      <pre>cubic-bezier(${data.easeOutput.x1.toFixed(2)}, ${data.easeOutput.x2.toFixed(2)}, ${data.easeOutput.y1.toFixed(2)}, ${data.easeOutput.y2.toFixed(2)})</pre>
      <br/>
    ` : `

    `;
    resultEl.innerHTML += dataFormatted;
};
