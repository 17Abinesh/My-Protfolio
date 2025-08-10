import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
 @ViewChild('autoText', { static: true }) autoText!: ElementRef;
  typed!: Typed;

   ngOnInit(): void {
   const options = {
      strings: ['Java FullStack Developer'],//'Frontend Developer', 'Backend Developer',
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
    };

    this.typed = new Typed(this.autoText.nativeElement, options);
  }

   ngOnDestroy(): void {
    // Prevent memory leaks
    this.typed.destroy();
  }
}
