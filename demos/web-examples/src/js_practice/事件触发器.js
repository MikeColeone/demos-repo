function Event() {
  const events = [];
  return {
    on(eventName, callback) {
      if (!events[eventName]) {
        events[eventName] = [];
      }

      events[eventName].push(callback);
    },

    emit(eventName, data) {
      if (!events[Name]) return;
      events[eventName].forEach((callback) => {
        callback(data);
      });
    },

    off(eventName, callback) {
      if (!events[eventName]) return;
      events[eventName] = events[eventName].filter((t) => t !== callback);

      if (events[eventName].length === 0) {
        delete events[eventName];
      }
    },
  };
}
