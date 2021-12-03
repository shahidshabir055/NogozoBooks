import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-featured-novels',
  templateUrl: './featured-novels.component.html',
  styleUrls: ['./featured-novels.component.css']
})
export class FeaturedNovelsComponent implements OnInit {
  images = [
    {path: "assets/pic4.jpg"},
    {path: "assets/pic1.jpg"},
    {path: "assets/pic2.jpg"},
    {path: "assets/pic3.jpg"},
    {path: "assets/pic4.jpg"},
    {path: "assets/pic5.jpg"},
    {path: "assets/pic6.jpg"},
    {path: "assets/pic1.jpg"},
    {path: "assets/pic2.jpg"},
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
