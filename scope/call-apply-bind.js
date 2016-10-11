function Animal(attrs) {
    this.name = attrs.name;
    this.color = attrs.color;
    this.species = attrs.species;
}

Animal.prototype = {
    hunger: function () {
        console.log(`${this.name} is hungry`);
    },
    toString: function() {
        console.log(this);
        return '[object Object]';
    }
}

var Bear = new Animal({
    name    : 'Yogi',
    color   : 'brown',
    species : 'bear'
});

setTimeout(()=>Bear.hunger(), 2000);
