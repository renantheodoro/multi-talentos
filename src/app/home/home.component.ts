import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#game-action li').click(function(){
      var id = $(this).attr('data-id');
      $('.game-item, #game-action li').removeClass('active');
      $(this).addClass('active');
      $('#game-' + id).addClass('active');
    });

    //Logado
    var header = $('header');
    if(localStorage.getItem('user')){
      header.addClass('user-on')
    } else if(localStorage.getItem('faculdade')){
      header.addClass('faculdade-on')
    }

  }
}
