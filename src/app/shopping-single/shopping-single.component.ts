import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-shopping-single',
  templateUrl: './shopping-single.component.html',
  styleUrls: ['./shopping-single.component.css']
})
export class ShoppingSingleComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var data = {
      "user":{
        "nome":  "Claudeixom",
        "email": "claudeixom@fiap.com",
        "coins": {
          "multiCoins": 1500,
          "goldCoins": 145
        }
      }
    };

    console.log('Data', data)

    var btnmultcoin = $('#btnmultcoin')
    var btngoldcoin = $('#btngoldcoin')
    var userMultiCoins = $('#user-multi_coins')
    var userGoldCoins = $('#user-gold_coins')
    var btnCancelar = $('#btn-cancelar')
    var header = $('header');

    if(localStorage.getItem('user')){
      header.addClass('user-on')
    } else if(localStorage.getItem('faculdade')){
      header.addClass('faculdade-on')
    }

    virify()

    function addDados(obj){
      var multiCoin = obj.user.coins.multiCoins
      var goldCoin = obj.user.coins.goldCoins
      userMultiCoins[0].innerHTML = '<img src="../../assets/img/Multi.png" alt=""> ' + multiCoin
      userGoldCoins[0].innerHTML = '<img src="../../assets/img/Gold.png" alt=""> ' + goldCoin
    }

    function virify(){
      if(localStorage.getItem('user')){
        let objUser = JSON.parse(localStorage.getItem('user'))
        addDados(objUser)
        console.log('LOGADO')
      }
    }

    function saveData(obj){
      localStorage.setItem('user', JSON.stringify(obj));
      console.log('O dado foi salvo!!!!')
    }

    btnmultcoin.click(function(e){
      var valorCurso = $(this).data('coin')
      var valorAtual = JSON.parse(localStorage.getItem('user')).user.coins.multiCoins

      if (valorAtual < valorCurso) {
        // document.getElementById('error').className = 'on'
      } else {
         //comprar
        valorCurso = parseInt(valorCurso)
        var resultado = valorAtual - valorCurso
        userMultiCoins[0].innerHTML = '<img src="../../assets/img/Multi.png" alt=""> ' + resultado + '$'
        data.user.coins.multiCoins = resultado
        var obj = data
        saveData(obj)
      }
    });

    btngoldcoin.click(function(e){
      var valorCurso = $(this).data('coin')
      var valorAtual = JSON.parse(localStorage.getItem('user')).user.coins.goldCoins
      var el = $('#user-gold_coins')

      if (valorAtual < valorCurso) {
        // document.getElementById('error').className = 'on'
      } else {
         //comprar
        valorCurso = parseInt(valorCurso)
        var resultado = valorAtual - valorCurso
        userGoldCoins[0].innerHTML = '<img src="../../assets/img/Gold.png" alt=""> ' + resultado + '$'
        data.user.coins.goldCoins = resultado
        var obj = data
        saveData(obj)
      }
    });

    btnCancelar.click(function(){
      userGoldCoins[0].innerHTML = '<img src="../../assets/img/Gold.png" alt=""> 145$'
      userMultiCoins[0].innerHTML = '<img src="../../assets/img/Multi.png" alt=""> 1500$'
      data.user.coins.goldCoins = 145
      data.user.coins.multiCoins = 1500
      var obj = data
      saveData(obj)
    })

    // Modal

    var abrirModal = function() {
      $('.modal, .nosso-overlay').fadeIn();
    }

    var fecharModal = function() {
      $('.modal, .nosso-overlay').fadeOut();
      $('.modal-content').removeClass('show');
      $('#efetuar-compra').addClass('show');
    }

    var abrirConfirmar = function() {
      $('#efetuar-compra').removeClass('show');
      $('#confirmar-compra').addClass('show');
    }

    var fecharConfirmar = function() {
      $('.modal-content').removeClass('show');
      $('#efetuar-compra').addClass('show');
    }

    var animacaoConfirmar = function() {
      $('.modal-content').removeClass('show');
      $('#compra-efetuada').addClass('show');
    }

    $('.openModal').click(abrirModal);
    $('.nosso-overlay').click(fecharModal);
    $('.info-course .coins a').click(abrirConfirmar);
    $('#btn-cancelar').click(fecharConfirmar);
    $('#btn-confirmar').click(animacaoConfirmar);
    $('.btn-fechar').click(fecharModal);

  }
}
