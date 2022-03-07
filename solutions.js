class Cat {
    constructor(petName, color){
        this.petName = petName
        this.color = color
    }
    meow () {
        console.log('nyaa nyaa nyaaaaaaaaa')
    }
}

let snuggles = new Cat('Snuggles', 'orange')
let meowficerCuddles = new Cat('Meowficer Cuddles', 'black')
console.log(snuggles)
console.log(meowficerCuddles)
snuggles.meow()
meowficerCuddles.meow()

const alterCat = (cat, newName, newColor) => {
    cat.petName = newName
    cat.color = newColor
}

alterCat(snuggles, 'Bob', 'teal')
console.log(snuggles)

let catArray = []
let catNames = ['bob', 'andrew', 'sarah', 'tom', 'jessica', 'alice']
let catColors = ['orange', 'black', 'brown', 'yellow', 'spotted', 'striped']
for(let i = 0; i < 6; i++){
    catArray[i] = new Cat(catNames[i], catColors[i])
}
console.log(catArray)
console.log(catArray[3])

let catPerson = {cats: catArray}
console.log(catPerson)



class Pirate {
    constructor(pName, ship, scurvy){
        this.name = pName
        this.ship = ship
        this.scurvy = typeof(scurvy) == 'boolean' ? scurvy : false
    }
    argh(){
        console.log('aaaaaaarrrrrrgggggggghhhhhhhh')
    }
    hasScurvy(){
        console.log(`${this.name}'s scurvy status is ${this.scurvy}`)
    }
    scurvyDog(){
        if(this.scurvy){
            console.log(`${this.name} is a scurvy dog!`)
        }
        else(
            console.log(`${this.name} is not a scurvy dog!`)
        )
    }
}

let blackPearl = [new Pirate('Jack Sparrow', 'Black Pearl', false), new Pirate('Davy Jones', 'Black Pearl', true), new Pirate('Will Turner', 'Black Pearl', 'true')]
let jollyRoger = [new Pirate('Black Beard', 'Jolly Roger', false), new Pirate('Bartholomew Roberts', 'Jolly Roger', false), new Pirate('Emanuel Wynn', 'Jolly Roger', false)]

let piratesAr = (ship1, ship2) => {
    console.log(ship1)
    console.log(ship2)
}

piratesAr(blackPearl, jollyRoger)