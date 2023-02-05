import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-voting-buttons',
  templateUrl: './voting-buttons.component.html',
  styleUrls: ['./voting-buttons.component.scss'],
})
export class VotingButtonsComponent implements OnInit {
  @Input() upVotes: any;
  @Input() downVotes: any;
  ratio: number;
  constructor() {
    this.ratio = 0;
  }
  ngOnInit(): void {
    this.ratio = this.upVotes - this.downVotes;
  }
}
