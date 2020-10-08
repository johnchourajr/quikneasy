figma.showUI(__html__);

figma.ui.onmessage = msg => {

  function readEasingValues(node) {
    if ('reactions' in node && node.reactions.length > 0 && node.reactions != "undefined") {
      
      let ease = node.reactions[0].action.transition.easing
      let name = node.name

      console.log(node, ease, name);

      if (ease.type === "CUSTOM_CUBIC_BEZIER") {
        let easeOutput = ease.easingFunctionCubicBezier ? ease.easingFunctionCubicBezier : ease
        let result = { node, name, easeOutput }
        figma.ui.postMessage(result)
      } else {
        let message = `Ease Type: ${ease.type}`
        let result = { node, name, message }
        figma.ui.postMessage(result)
      }
    } else {

      console.log(node);

      let name = node.name
      let message = `No Easing`
      let result = { node, name, message }
      figma.ui.postMessage(result)
    }

    figma.ui.resize(300, 400)
  }

  if (msg.type === 'selected-frame') {
    for (const node of figma.currentPage.selection) {
      readEasingValues(node)
    }
  }

  if (msg.type === 'resize-small') {
    figma.ui.resize(300, 200)
  }

  // figma.closePlugin();
};
