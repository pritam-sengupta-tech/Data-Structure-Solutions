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
    get(key){
        let index = this._hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1]; // Return the value associated with the key
                }
            }  
        }
        return undefined; // Key not found
    }
}

myHashTable = new HashTable();
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
myHashTable.set('bananas', 1);
myHashTable.set('kiwi', 1000);
myHashTable.set('mango', 5000);

console.log(myHashTable.get('orange')); // undefined
console.log(myHashTable.get('grapes')); // 10000
//console.log(myHashTable);