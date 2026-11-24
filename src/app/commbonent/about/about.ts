import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [ FormsModule , CommonModule ],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About implements OnInit{
    constructor(private cdr: ChangeDetectorRef){}

data: any[] = [];
async ngOnInit() {
  
  const r = await fetch("/posts.json")
  const result = await r.json()
  this.data = result.posts;
  console.log();
  this.cdr.detectChanges();
  
} 

}
