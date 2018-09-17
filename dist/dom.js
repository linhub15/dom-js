function el(tag, attrs) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var element = tag ? document.createElement(tag) : null;
    var keys = attrs && element ? Object.keys(attrs) : null;
    var childNodes = children && element ? children : null;
    for (var i in keys) {
        element.setAttribute(keys[i], attrs[keys[i]]);
    }
    for (var _a = 0, childNodes_1 = childNodes; _a < childNodes_1.length; _a++) {
        var node = childNodes_1[_a];
        element.appendChild(node instanceof HTMLElement ? node : document.createTextNode(node));
    }
    return element;
}
