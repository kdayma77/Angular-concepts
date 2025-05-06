import { Component, Inject, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { ViewChildChilderenComponent } from '../view-child-childeren/view-child-childeren.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-child-parent',
  standalone: true,
  imports: [ViewChildChilderenComponent,CommonModule],
  templateUrl: './view-child-parent.component.html',
  styleUrl: './view-child-parent.component.scss'
})
export class ViewChildParentComponent {

  items = [1, 2, 3, 4];
  posts!: any[];
  @Inject(PLATFORM_ID) private platformId!: Object

  constructor(public dataService: DataService) {
    
  }

  @ViewChildren(ViewChildChilderenComponent) itemComponents!: QueryList<ViewChildChilderenComponent>;

  ngOnInit(): void {
    
    this.dataService.posts$.subscribe(data => {
      this.posts = data;
    });
    this.dataService.fetchPosts();
  }

  ngAfterViewInit(): void {
    // Log all child component instances
    console.log(this.itemComponents);

    // Call a method on each child component
    this.itemComponents.forEach((comp, index) => {
      comp.logId(this.items[index]);
    });
  }
  
}
