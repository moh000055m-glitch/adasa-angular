import { CommonModule } from '@angular/common';
import { Component , OnInit , ChangeDetectorRef} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule ,CommonModule],
  selector: 'app-blog',
  styleUrl: './blog.css',
  templateUrl: './blog.html',
})
export class Blog implements OnInit{
    constructor(private cdr: ChangeDetectorRef){}

data: any[] = [];
async ngOnInit() {
  
  const r = await fetch("/posts.json")
  const result = await r.json()
  this.data = result.posts;
  console.log();
  this.cdr.detectChanges();
  
} 
catagory = "جميع المقالات"

}
