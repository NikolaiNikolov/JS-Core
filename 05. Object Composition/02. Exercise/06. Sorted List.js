function getSortedList() {

    return {
        arr: [],
        add,
        remove,
        get,
        size: 0,
        toString: function () {
            return this.arr.join(' ');
        },
        sortArr
    };
    
    function add(element) {
        this.arr.push(element);
        this.size++;
        this.sortArr();
    }
    function remove(index) {
        if (index < this.arr.length && index >= 0) {
            this.arr.splice(index, 1);
            this.size--;
        }
    }
    function get(index) {
        if (index < this.arr.length && index >= 0) {
            return this.arr[index];
        }
    }
    function sortArr() {
        this.arr = this.arr.sort( (a, b) => a - b );
    }
}

let sortedList = getSortedList();

sortedList.add(1);
sortedList.add(4);
sortedList.add(3);
sortedList.add(10);
sortedList.add(-54);
console.log(sortedList.size);
sortedList.remove(4);
console.log(sortedList.size);
sortedList.remove(3);
console.log(sortedList.size);

console.log(sortedList.arr);