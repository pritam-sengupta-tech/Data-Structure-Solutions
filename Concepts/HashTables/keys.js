class HashTable {
    constructor(size = 7) { // Default size is 7
        this.table = new Array(size);
    }
    // Hash function to convert a string key into an index
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.table.length;
        }
        return hash;
    }
    set(key, value) {
        let index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = []; // Initialize the index with an empty array if it's not already set
        }
        this.table[index].push([key, value]); // Store the key-value pair as an array
        return this;
    }
    keys() {
        let all_keys = [];
        for (let i=0; i<this.table.length; i++) {
            if(this.table[i]) {
                for (let j=0; j<this.table[i].length; j++) {
                    all_keys.push(this.table[i][j][0]); // Push the key into the all_keys array
                }
            }
        }
        return all_keys; // Return the array of keys
    }
}

myHashTable = new HashTable();
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
myHashTable.set('bananas', 1);
myHashTable.set('kiwi', 1000);
myHashTable.set('mango', 5000);

console.log(myHashTable.keys()) // ['grapes', 'apples', 'oranges', 'bananas', 'kiwi', 'mango']
//console.log(myHashTable);