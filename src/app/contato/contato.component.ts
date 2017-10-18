import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
