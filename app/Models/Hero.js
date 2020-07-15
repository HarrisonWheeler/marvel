export default class Hero {
    constructor(data) {
        this.name = data.name
        this.img = data.thumbnail.path + "." + data.thumbnail.extension
        this.description = data.description || "No Description"
        this.user = data.user || data.id
    }

    get Template() {
        // debugger
        let template = `
            <div class="col-4 p-2">
                <div class="border rounded shadow p-2">
                    <h3>Name: ${this.name}</h3>
                    <img src="${this.img}" class="img-fluid" alt="">
                    <h3>Description: ${this.description}</h3>
                    <h3>User: ${this.user}</h3>
                </div>
            </div>
                `

        return template
    }
    // static generateNewHeroTemplate(name) {

    // }
}