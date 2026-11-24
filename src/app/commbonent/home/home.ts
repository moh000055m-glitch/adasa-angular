import { Component , OnInit , ChangeDetectorRef} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit{
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
