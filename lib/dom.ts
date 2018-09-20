/**
 * Create an HTML Element with attributes and children nodes
 * 
 * @param tag The HTML tag to be created
 * @param attrs Nullable, supply HTML Attributes as key value pairs {class: 'panel', id: 'submitBtn', href: 'https://example.com'}
 * @param children HTML Elements or text. DO NOT use JSX <p>Text</p>
 * 
 * @example el('p',null,'Hello, world!')
 *      // Out: <p>Hello, world!</p>
 * 
 * @example el('h1',{"class":"text-center"}, 'My Title')
 *      // Out: <h1 class="text-center">My Title</h1>
 * 
 * @example el('ul',null, 
 *              el('li',null,'item1'),
 *              el('li',null,'item2'), 
 *              el('li',null,'item3'))
 *      // Out: <ul><li>item1</li>
 *                  <li>item2</li>
 *                  <li>item3</li></ul>
 */
function el(htmlTag, htmlAttributes, ...children) {
  let element = htmlTag ? document.createElement(htmlTag) : null;
  let keys = htmlAttributes && element ? Object.keys(htmlAttributes) : null;
  let childNodes = children && element ? children : null;
  for (let i in keys) {
    element.setAttribute(keys[i], htmlAttributes[keys[i]]);
  }
  for (let node of childNodes) {
    element.appendChild(
      node instanceof HTMLElement ? node : document.createTextNode(node));
  }
  return element;
}
var example = el('div', {"id":'main', "class": 'panel'}, el('h1',null,'My Example'), el('p',null,'Using this function sure makes creating DOM elements easier'));
/**
 * Output:
 * <div id="main" class="panel">
 *    <h1>My Example</h1>
 *    <p>Using this function sure makes creating DOM elements easier</p>
 * </div>
 */