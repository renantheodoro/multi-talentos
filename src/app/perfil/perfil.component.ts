import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var header = $('header');
    if(localStorage.getItem('user')){
      header.addClass('user-on')
    } else if(localStorage.getItem('faculdade')){
      header.addClass('faculdade-on')
    }

    var abrirModal = function() {
      $('.modal, .nosso-overlay').fadeIn();
    }

    var fecharModal = function() {
      $('.modal, .nosso-overlay').fadeOut();
    }

    $('.openModal').click(abrirModal);
    $('.nosso-overlay').click(fecharModal);
    $('.btn-fechar').click(fecharModal);


  }
}
