
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Conference } from '../../Models/conference';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  @Input() conf!: Conference;

  @Output() favorite = new EventEmitter<Conference>();

  @Output() like = new EventEmitter<Conference>();

}
