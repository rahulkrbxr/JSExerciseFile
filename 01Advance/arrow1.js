const camera = {
    price: 200, 
    weight: 2000,
    // other way to write this fn
    myDes() {
        return `This sony camera is of $${this.price}`
    }
    // myDes: function() {
    //     return `This sony camera is of $${this.price}`
    // }

    // cannot use arrow (=>) function here
    // => function should not be used methods and constructors
}

console.log(camera.myDes())

// This is ony for Redux people
// const func = () => ({key: 'value'});