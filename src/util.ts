export function curveNameUtil(val: string) {    
    switch (val) {
        case "EASE_IN":
            return "Ease In"
            break;
        case "EASE_OUT":
            return "Ease Out"
            break;
        case "EASE_IN_AND_OUT":
            return "Ease In And Out"
            break;
        case "LINEAR":
            return "Linear"
            break;
        case "EASE_IN_BACK":
            return "Ease In Back"
            break;
        case "EASE_OUT_BACK":
            return "Ease Out Back"
            break;
        case "EASE_IN_AND_OUT_BACK":
            return "Ease In And Out Back"
            break;
        case "CUSTOM_CUBIC_BEZIER":
            return "Custom Cubic Bezier"
            break;
        default:
            return null
    }
}


// "ON_CLICK" | "ON_HOVER" | "ON_PRESS" | "ON_DRAG" | "AFTER_TIMEOUT" | "MOUSE_ENTER" | "MOUSE_LEAVE" | "MOUSE_UP" | "MOUSE_DOWN"

export function triggerNameUtil(val: string) {
    switch (val) {
        case "ON_CLICK":
            return "On Click"
            break;
        case "ON_HOVER":
            return "On Hover"
            break;
        case "ON_PRESS":
            return "On Press"
            break;
        case "ON_DRAG":
            return "On Drag"
            break;
        case "AFTER_TIMEOUT":
            return "After Delay "
            break;
        case "MOUSE_ENTER":
            return "Mouse Enter"
            break;
        case "MOUSE_LEAVE":
            return "Mouse Leave"
            break;
        case "MOUSE_UP":
            return "Mouse Up"
            break;
        case "MOUSE_DOWN":
            return "Mouse Down"
            break;
        default:
            return null
    }
}