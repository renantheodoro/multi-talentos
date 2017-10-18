import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

    var login = $('#logar');
    var input = $('#exampleInputEmail');

    login.click(function(){
      if(input[0].value == 'everton@gmail.com'){
        localStorage.setItem('user', JSON.stringify(data));
        window.location.assign('/user')
      } else if (input[0].value == 'contato@fiap.com'){
        localStorage.setItem('faculdade', JSON.stringify(data));
        window.location.assign('/company')
      }
    })

  }
}
