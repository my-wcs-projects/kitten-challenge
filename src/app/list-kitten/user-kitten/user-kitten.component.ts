import { Component, Input } from '@angular/core';
import { Kitten } from '../../kitten-model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css'],
})
export class UserKittenComponent {
  @Input() userKittens: Kitten[] = [];
}
