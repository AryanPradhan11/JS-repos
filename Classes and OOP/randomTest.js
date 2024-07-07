class Places {
    constructor(place_name, countries, visit) {
        this.place_name = place_name;
        this.countries = countries;
        this.visit = visit
    }

    haveVisited() {
        if(this.visit == true) {
            return `You have visited: ${this.place_name}`
        } else {
            return `You have not visited: ${this.place_name} yet`
        }
    }
}

const s = new Places('KTM', 'Nepal', true)
console.log(s.haveVisited())