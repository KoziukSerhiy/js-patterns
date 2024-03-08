/**
 * Adds an event listener to an element.
 * @param {Element} el - The element to which the event listener will be added.
 * @param {string} event - The name of the event to listen for.
 * @param {function} fn - The callback function to be executed when the event is triggered.
 */
function addEvent(el, event, fn) {
  if (el.addEventListener) {
    el.addEventListener(event, fn, false);
  } else if (el.attachEvent) {
    el.attachEvent("on" + event, fn);
  } else {
    el["on" + event] = fn;
  }
}

// tests
const btn = document.querySelector("button");

addEvent(btn, "click", () => {
  console.log("btn click");
});
