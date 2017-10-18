import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-shopping-listagem',
  templateUrl: './shopping-listagem.component.html',
  styleUrls: ['./shopping-listagem.component.css']
})
export class ShoppingListagemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Logado
    var header = $('header');
    if(localStorage.getItem('user')){
      header.addClass('user-on')
    } else if(localStorage.getItem('faculdade')){
      header.addClass('faculdade-on')
    }

  }
}
