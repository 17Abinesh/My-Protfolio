import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {


  constructor(public router:Router){}

  ngOnInit(): void {
   
  }

  home()
  {
    this.router.navigate(['/myprotfolio/home']);
  }

  about()
  {
    this.router.navigate(['/myprotfolio/about']);
  }
  qualification()
  {
    this.router.navigate(['/myprotfolio/qualification']);
  }
  experience()
  {
    this.router.navigate(['/myprotfolio/experience']);
  }
  skill()
  {
    this.router.navigate(['/myprotfolio/skill']);
  }

}
