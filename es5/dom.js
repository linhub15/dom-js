/**
 * Create an HTML Element with attributes and children nodes
 *
 * @param tag The HTML tag to be created
 * @param attrs Nullable, supply HTML Attributes as key value pairs {class: 'panel', id: 'submitBtn', href: 'https://example.com'}
 * @param children HTML Elements or text. DO NOT use JSX <p>Text</p>
 */
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
var example = el('div', { "id": 'main', "class": 'panel' }, el('h1', null, 'My Example'), el('p', null, 'Using this function sure makes creating DOM elements easier'));
