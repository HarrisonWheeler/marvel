import _store from "../store.js";
import Hero from "../Models/Hero.js";
import store from "../store.js";

// @ts-ignore
let _api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/',
  timeout: 3000
})
// @ts-ignore
let _sandBoxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/harrisonwheeler/heroes',
  timeout: 5000
})


class HeroesService {
  constructor() {
    this.getNewHeroes()
    this.addHeroes()

  }

  getNewHeroes() {
    // debugger
    _api.get("characters?apikey=2148bbf76c5acd7c1b486d33517c8d71&limit=100").then(res => {
      console.log(res.data.data.results);
      let heroes = res.data.data.results.map(rawHeroData => new Hero(rawHeroData))
      _store.commit("newHeroes", heroes)
    }).catch(err => console.error(err))
  }

  addHeroes(heroId) {

    let myHeroId = _store.State.newHeroes.find(h => h.id == heroId)
    _sandBoxApi.post("", myHeroId).then(res => {
      console.log(res.data);
      this.getMyHeroes()
    }).catch(err => console.log(err))
  }



  getMyHeroes() {
    _sandBoxApi.get("").then(res => {
      _store.commit("myHeroes", res.data.data.map(rawHeroData => new Hero(rawHeroData)))
    }).catch(err => console.log(err))
  }

}

const service = new HeroesService();
export default service;
