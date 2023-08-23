let lastEvent;
['click', 'touchstart', 'mousedown', 'keydown', 'mouseover'].forEach(eventType => {
    document.addEventListener(eventType, (event) => {
        lastEvent = event;
    }, {
        capture: true, // capture phase
        passive: true//The default event is not blocked by default
    });
});
export default function () {
    return lastEvent;
}