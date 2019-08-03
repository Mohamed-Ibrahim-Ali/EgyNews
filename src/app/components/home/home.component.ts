import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
declare var $:any;
import 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  News:any[] = []

  constructor(private fs:HomeService) { 

    this.fs.getNews().subscribe(data => {this.News = data.articles

      for(let i=0; i<this.News.length; i++) {
        if (this.News[i].urlToImage == null){

          this.News[i].urlToImage = 'assets/1.jpg'

        } 
      }
    })
  }

  ngOnInit() {
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 200) {
        $('.up').show()
      } else {
        $('.up').hide()
      }
    })

    $('.up').click(function () {
      $('html, body').animate({scrollTop : 0}, 1000);
    })
  }

}
