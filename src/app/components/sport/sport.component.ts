import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/services/sport.service';
declare var $:any;
import 'jquery';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {


  News:any[] = []

  constructor(private fs:SportService) { 

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
