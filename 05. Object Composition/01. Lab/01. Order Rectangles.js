function order(input) {
    let rectangles = [];

    for ([width, height] of input) {
        let rectangle = createRect(width, height);
        rectangles.push(rectangle);
    }

    function createRect(width, height) {
        return {
            width,
            height,
            area: () => this.width * this.height,
            compareTo: function(other) {
                let result = this.area() - other.area();
                return result || (other.width - this.width);
            }
        };
    }

    rectangles.sort((a, b) => a.compareTo(b));
    return rectangles;
}

console.log(order([[10,5], [3,20], [5,12]]));