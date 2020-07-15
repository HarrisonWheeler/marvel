import _heroesService from "../Services/HeroesService.js";
import _store from "../store.js";
import Hero from "../Models/Hero.js";

//Private
function _drawNewHeroes() {
  // debugger
  let template = ""
  _store.State.newHeroes.forEach(hero => template += hero.Template)
  document.getElementById("new-hero").innerHTML = template
}

//Public
export default class HeroesController {
  constructor() {
    _store.subscribe("newHeroes", _drawNewHeroes);

  }


}
