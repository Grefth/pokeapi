import { Component, Input } from '@angular/core';
import { Card } from '../interfaces/card.interface'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card!: Card;
  

}
