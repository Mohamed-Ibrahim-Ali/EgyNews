import { Component, OnInit } from '@angular/core';
import { EnService } from 'src/app/services/en.service';
declare var $:any;
import 'jquery';



@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {

  News:any[] = []

  constructor(private fs:EnService) { 
    this.fs.getNews().subscribe(data =>  { this.News = data.articles
    
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
