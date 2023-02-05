import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'blog-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() blog: any;
  constructor() {}

  ngOnInit(): void {
    this.blog.ratio = this.blog.upvotes - this.blog.downvotes;
  }
}
