class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    const index = this.hashMod(key);
    
    if (this.data[index] === null) {
      this.data[index] = new KeyValuePair(key, value);
    } else {
      let current = this.data[index];
      while (current.next !== null) {
        if (current.key === key) {
          current.value = value;
          return;
        }
        current = current.next;
      }
      if (current.key === key) {
        current.value = value;
      } else {
        current.next = new KeyValuePair(key, value);
      }
    }
    
    this.count++;
    if (this.count > this.capacity * .75) {
      this.resize();
    }
  }
  

  
  
  
  read(key) {
    const index = this.hashMod(key); // calculate the index using hashMod
  
    if (this.data[index] === null) { // if the index is null...
      return undefined; // key does not exist so it should return undefined
    } else { // if the index is not null...
      let current = this.data[index]; // set a current pointer 
  
      while (current !== null) { // traverse the list using the current pointer until we find the key or reach the end of the list
        if (current.key === key) { // if we find the key...
          return current.value; // return its matching value
        }
        current = current.next; // if we don't find the key, move the current pointer to the next pointer
      }
  
      return undefined; // if we reach the end of the list without finding the key then the key does not exist.. return undefined
    }
  }

  resize() {
    const oldData = this.data;
    this.capacity *= 2;
    this.count = 0;
    this.data = new Array(this.capacity).fill(null);
  
    for (let i = 0; i < oldData.length; i++) {
      let current = oldData[i];
      while (current !== null) {
        this.insert(current.key, current.value);
        current = current.next;
      }
    }
  }

  delete(key) {
    const index = this.hashMod(key);
  
    if (this.data[index] === null) {
      return "Key not found";
    } else if (this.data[index].key === key) {
      this.data[index] = this.data[index].next;
      this.count--;
      return "Key deleted";
    } else {
      let prev = this.data[index];
      let current = this.data[index].next;
  
      while (current !== null) {
        if (current.key === key) {
          prev.next = current.next;
          this.count--;
          return "Key deleted";
        }
        prev = current;
        current = current.next;
      }
  
      return "Key not found";
    }
  }
}



module.exports = HashTable;