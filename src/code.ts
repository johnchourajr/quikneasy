figma.showUI(__html__);

figma.ui.onmessage = msg => {

  function readEasingValues(node) {
    console.log(node);
    

    if ('reactions' in node && node.reactions.length > 0 && node.reactions != "undefined") {

      for (const reaction of node.reactions) {
        let ease = reaction.action.transition.easing
        let name = node.name
        // console.log(reaction, node, ease, name);
        if (ease.type === "CUSTOM_CUBIC_BEZIER") {
          let curves = ease.easingFunctionCubicBezier ? ease.easingFunctionCubicBezier : ease
          let result = { name, node, curves, reaction }
          figma.ui.postMessage(result)
        } else {
          let result = { name, node, reaction }
          figma.ui.postMessage(result)
        }
      }

    } else {
      let name = node.name
      let reaction = "FRAME_HAS_NO_TRANSITIONS"
      let result = { node, name, reaction }
      figma.ui.postMessage(result)
    }

    figma.ui.resize(300, 400)
  }

  if (msg.type === 'selected-frame') {
    if (figma.currentPage.selection.length > 0) {
      for (const node of figma.currentPage.selection) {
        readEasingValues(node)
      }
    } else {
      figma.ui.postMessage("NO_FRAMES_SELECTED")
    }
    
  }

  if (msg.type === 'resize-small') {
    figma.ui.resize(300, 200)
  }

  // figma.closePlugin();
};
