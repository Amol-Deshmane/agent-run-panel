export function runEmitter(events, callback) {
  let i = 0;

  function emitNext() {
    if (i >= events.length) return;

    const event = events[i];
    callback(event);

    i++;
    setTimeout(emitNext, Math.random() * 1200 + 500); // realistic delay
  }

  emitNext();
}