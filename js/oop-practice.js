// // STEP 1
// function Cat() {

// }
// const Dog = function () {

// }
// // STEP 2
// const cat1 = new Cat()
// const dog1 = new Dog()
// // STEP 3
// class Animal {
//     constructor() {
//         onConstruct()
//     }
//     onConstruct = () => {
//         console.log("The animal has been created.")
//     }
// }
// // STEP 4
// class Animal {
//     constructor(message) {
//         console.log(message)
//     }
// }
// const a = new Animal('Hello world')
// // STEP 5
// class Animal {
//     constructor(type, breed, color, height, weight) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.weight = weight
//     }
// }
// const a = new Animal('dog', 'daschund', 'white', '1.6', '80')
// // // STEP 6
// for (p in a) {
//     console.log(a[p])
// }
// // STEP 7
// class Animal {
//     constructor(type, breed, color, height, weight) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.weight = weight
//     }
//     speak = function () {
//         if (this.type.toUpperCase() == 'DOG')
//             return `The ${this.color} dog is barking!`
//         if (this.type.toUpperCase() == 'CAT')
//             return `The ${this.color} cat is meowing!`
//     }
// }
// const a = new Animal('dog', 'daschund', 'white', '1.6', '80')
// console.log(a.speak())
// // STEP 8
// class Animal {
//     constructor(type, breed, color, height, weight) {
//         this._type = type
//         this._breed = breed
//         this._color = color
//         this._height = height
//         this._weight = weight
//     }
//     get type() { return this._type }
//     get breed() { return this._breed }
//     get color() { return this._color }
//     get height() { return this.height }
//     get weight() { return this.weight }
//     checkType = function () {
//         console.log(this)
//         if (this.type.toUpperCase() == 'DOG')
//             return 'dog'
//         if (this.type.toUpperCase() == 'CAT')
//             return 'cat'
//         return 'animal'
//     }
//     speak = function () {
//         return `The ${this.checkType()} has made a noise!`
//     }
// }
// const a = new Animal('dog', 'daschund', 'white', '1.6', '80')
// console.log(a.speak())
// // STEP 9
// function findWords(word) {
//     let indeces = []
//     let s = this.toString()
//     let i = s.indexOf(word)
//     while (i >= 0) {
//         // i realize this is a crazy solution but it works!
//         indeces.push(i + this.toString().length - s.length)
//         s = s.slice(i + word.length)
//         i = s.indexOf(word)
//     }
//     return indeces;
// }
// String.prototype.findWords = findWords
// sentence = 'The quick brown fox jumped quickly over the quick lazy dog real quick'
// console.log(sentence.findWords('quick'))