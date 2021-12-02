import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  images = ["assets/pic4.jpg", "assets/pic2.jpg", "assets/pic3.jpg"];

  paused = false;
  unpauseOnArrow = true;
  pauseOnIndicator = true;
  pauseOnHover = true;
  pauseOnFocus = true;
  classesInNumber = ["9","10","11","12","1-8"];
  classesInRoman=["Class IX","Class X", "Class XI","Class XII", "Class 1-8", ];
  higherClasses=["IIT", "NEET", "ICSE", "Govt. Exam", "ENGG"];
  higherClassesInRoman=["IIT JEE", "NEET", "ICSE","Govt. Exam", "ENGG."]
  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
