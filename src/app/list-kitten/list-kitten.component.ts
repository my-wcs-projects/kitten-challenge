import { Component } from '@angular/core';
import { Kitten } from '../kitten-model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css'],
})
export class ListKittenComponent {
  kittens: Kitten[] = [];
  userKittens: Kitten[] = [];

  showInfo: number | null = null;
  onRrceiveNewKitten(newKitten: Kitten) {
    this.kittens.push({ ...newKitten }); // Add the new kitten to the array
  }

  adoptKitten(index: number) {
    const adoptKitten = this.kittens[index];
    if (adoptKitten) {
      this.userKittens.push(adoptKitten);
      this.kittens.splice(index, 1);
    }
  }
}
