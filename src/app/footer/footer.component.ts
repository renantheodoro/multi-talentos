import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#go-top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
    $("a").click(function() {
      console.log("kfjkdsjf");
      $("html, body").scrollTop(0);
    });
  }

}
