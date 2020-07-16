export default class Hero {
    constructor(data) {
        // need to add an id and pass it through
        this.id = data._id || data.id
        this.name = data.name
        this.img = data.thumbnail.path + "." + data.thumbnail.extension
        this.description = data.description || "No Description"
        this.user = data.user || "No User"
    }

    get Template() {
        // debugger
        let template = /*html*/`
            <div class="col-4 p-2">
                <div class="border rounded shadow p-2">
                    <h3>Name: ${this.name}</h3>
                    <h3>ID: ${this.id}</h3>
                    <img src="${this.img}" class="img-fluid" alt="">
                    <h3>Description: ${this.description}</h3>
                    <h3>User: ${this.user}</h3>
                    <button class="btn btn-rounded btn-success btn-block" onclick="app.heroesController.addHeroes('${this.id}')">Add To Team!</button>
                </div>
            </div>
                `

        return template
    }
    // static generateNewHeroTemplate(name) {

    // }
}