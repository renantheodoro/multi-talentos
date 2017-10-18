import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var deslogar = $('#btn-logout')
    var header = $('header')
    deslogar.click( function(){
      localStorage.clear();
      header.removeClass()
    });

    if(localStorage.getItem('user')){
      header.addClass('user-on')
    } else if(localStorage.getItem('faculdade')){
      header.addClass('faculdade-on')
    }

    var abrirMenu = function() {
      $('header .menu, header .btns').addClass('active');
      $('#header-overlay').fadeIn();
    }

    var fecharMenu = function() {
      $('header .menu, header .btns').removeClass('active');
      $('#header-overlay').fadeOut();
    }


    $('#startMenu').click(abrirMenu)
    $('#header-overlay, header .menu a, .btns a').click(fecharMenu)

  }
}
