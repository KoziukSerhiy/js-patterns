// Facade pattern
function addEvent(el, ev, fu) {
    (el.addEventListener) ? el.addEventListener(ev, fu, false) :
        (el.attachEvent) ? el.attachEvent('on' + ev, fu) :
            el['on' + ev] = fu;
}