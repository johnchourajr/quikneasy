figma.showUI(__html__);
figma.ui.onmessage = msg => {
    function readEasingValues(node) {
        if ('reactions' in node && node.reactions.length > 0 && node.reactions != "undefined") {
            let ease = node.reactions[0].action.transition.easing;
            let name = node.name;
            let easeOutput = ease.easingFunctionCubicBezier ? ease.easingFunctionCubicBezier : ease;
            let result = { node, name, easeOutput };
            figma.ui.postMessage(result);
        }
        else {
            let name = node.name;
            let easeOutput = ease.easingFunctionCubicBezier ? ease.easingFunctionCubicBezier : ease;
            let result = { name, easeOutput };
            figma.ui.postMessage(result);
            figma.ui.postMessage(`No Curves`);
        }
    }
    function changeEasingValues(node) {
        if ('reactions' in node && node.reactions.length > 0 && node.reactions != "undefined") {
            let ease = node.reactions[0].action.transition.easing;
            let name = node.name;
            if (ease.easingFunctionCubicBezier) {
                figma.ui.postMessage(`Before Change: ${ease.easingFunctionCubicBezier}`);
                ease.easingFunctionCubicBezier *= { x1: 0.1, x2: 0.25, y1: 0.3, y2: 1 };
            }
            figma.ui.postMessage(`After Change: ${ease.easingFunctionCubicBezier}`);
        }
    }
    if (msg.type === 'selected-frame') {
        for (const node of figma.currentPage.selection) {
            readEasingValues(node);
        }
    }
    // figma.closePlugin();
};
