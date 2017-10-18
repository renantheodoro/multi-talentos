import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e){
      e.preventDefault();
      var $this = $(this),
          tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
          others = $this.closest('li').siblings().children('a'),
          target = $this.attr('href');
          others.removeClass('active');
          $this.addClass('active');
          $(tabgroup).children('div').fadeOut();
          $(target).fadeIn();
    })

    $('.assinatura').click(function(){
      $(this).closest('.assinaturas').find('.assinatura').removeClass('active');
      $(this).addClass('active');
    });
  }

}
