class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = [];
  }

  isCacheFull() {
    return this.cache.length === this.capacity;
  }

  getItem(item) {
    return this.cache.indexOf(item);
  }

  setItem(item) {
    const itemIndex = this.getItem(item);
    // If item is not present in the cache array
    if (itemIndex === -1) {
      if (this.isCacheFull()) {
        this.cache.pop();
        this.cache.unshift(item);
      } else {
        this.cache.unshift(item);
      }
    }

    // If item is already present in the cache array
    if (itemIndex !== 1) {
      this.cache.splice(itemIndex, 1); // remove that item from whatever index it is present on
      this.cache.unshift(item); // add that item to first index(beginning index)
    }
  }
}

// Vid Link --> https://youtu.be/V_Z8Blyy0Mo?si=S0Gqlv_xLsFsn2M4
