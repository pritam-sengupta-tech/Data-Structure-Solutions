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
}

myHashTable = new HashTable();
console.log(myHashTable); // HashTable { table: [ <7 empty items> ] }