import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'duel-red-army-header',
  templateUrl: './red-army-header.component.html',
  styleUrls: [],
})
export class RedArmyHeaderComponent implements OnInit {
  @Input() shields!: number;
  shieldsAsObj: number[] = [];

  ngOnInit(): void {
    this.shieldsAsObj = Array(this.shields).fill(0);
  }
}
