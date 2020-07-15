import _store from "../store.js";
import Hero from "../Models/Hero.js";
import store from "../store.js";

// @ts-ignore
let _api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/characters?apikey=2148bbf76c5acd7c1b486d33517c8d71&limit=100',
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
    _api.get().then(res => {
      console.log(res.data.data.results);
      _store.commit("newHeroes", res.data.data.results.map(rawHeroData => new Hero(rawHeroData)))
      console.log(_store.State.newHeroes);
    }).catch(err => console.error(err))
  }

  addHeroes() {
    _sandBoxApi.post('', _store.State.myHeroes).then(res => {
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
