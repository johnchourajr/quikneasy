import './ui.css'
import * as util from './util.ts'


let resultEl = document.getElementById('result')

document.getElementById('selected-frame').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'selected-frame' } }, '*')
    resultEl.innerHTML = null
}

document.getElementById('reset').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'resize-small' } }, '*')
  resultEl.innerHTML = null
}

function outputBlock(name, node, curves, reaction) {  
  return(`
    <div class="wrapper">
      <p class="wrapper-header">Frame: "${name}"</p>
      <table>
        <tbody>
          <tr>
            <td><p>id</p></td>
            <td><pre>${node.id}</pre></td>
          </tr>
          <tr>
            <td><p>Trigger</p></td>
            <td><pre>${util.triggerNameUtil(reaction.trigger.type)}</pre></td>
          </tr>
          <tr>
            <td><p>Type</p></td>
            <td><pre>${util.curveNameUtil(reaction.action.transition.easing.type)}</pre></td>
          </tr>
          ${curves ? `<tr>
            <td><p>Curves</p></td>
            <td><pre>${curves}</pre></td>
          </tr>` : ``}
        </tbody>
      </table>
    </div>
  `)
}

onmessage = (event) => {
    let data = event.data.pluginMessage

  if (data === "NO_FRAMES_SELECTED") {
    resultEl.innerHTML += `<div class="wrapper disabled"><p class="wrapper-header">No frame selected</p></div>`
  } else {

    if (data.reaction === "FRAME_HAS_NO_TRANSITIONS") {
      resultEl.innerHTML += `<div class="wrapper disabled"><p class="wrapper-header">Frame: "${data.name}" has no transitions</p></div>`
    } else {
      let dataFormatted = "curves" in data
        ? `${data.curves.x1.toFixed(2)}, ${data.curves.x2.toFixed(2)}, ${data.curves.y1.toFixed(2)}, ${data.curves.y2.toFixed(2)}`
        : null

      resultEl.innerHTML += outputBlock(data.name, data.node, dataFormatted, data.reaction)  
    }
  }
}