import _heroesService from "../Services/HeroesService.js";
import _store from "../store.js";
import Hero from "../Models/Hero.js";

//Private
function _drawNewHeroes() {
  let template = ""
  _store.State.newHeroes.forEach(hero => template += hero.Template)
  document.getElementById("new-hero").innerHTML = template
}

function _drawMyHeroes() {
  let template = ""
  _store.State.myHeroes.forEach(hero => template += hero.Template)
  document.getElementById("my-heroes").innerHTML = template
}


//Public
export default class HeroesController {
  constructor() {
    _store.subscribe("newHeroes", _drawNewHeroes);
    _store.subscribe("myHeroes", _drawMyHeroes);
  }
  addHeroes() {
    _heroesService.addHeroes()
  }

}
