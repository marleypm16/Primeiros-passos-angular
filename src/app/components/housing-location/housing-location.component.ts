import { Component,Input } from '@angular/core';
import { HousingLocation } from '../../housing-location';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() hausingLocation!:HousingLocation; //Estou afirmando que esse atributo não vai ser nulo
  //property binding?
}
