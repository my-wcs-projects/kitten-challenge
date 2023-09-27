import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Kitten } from '../../kitten-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent {
  newKitten: Kitten = new Kitten('', '', new Date(), '');
  @Output() sendKitten: EventEmitter<Kitten> = new EventEmitter();

  addKitten() {
    if (
      !this.newKitten.name ||
      !this.newKitten.breed ||
      !this.newKitten.birthDate ||
      !this.newKitten.imageLink
    ) {
      return;
    }
    this.sendKitten.emit(this.newKitten);

    this.newKitten = {
      name: '',
      breed: '',
      birthDate: new Date(),
      imageLink: '',
    };
  }
}
