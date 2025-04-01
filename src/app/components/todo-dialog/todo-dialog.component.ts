import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faCheckSquare,
  faCheckToSlot,
  faClock,
  faClose,
  faTag,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../btn/btn.component';
import { ToDo } from '../../models/todo.model';

interface InputData {
  todo: ToDo;
}

interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-todo-dialog',
  imports: [FaIconComponent, BtnComponent],
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent {
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  todo!: ToDo;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) private data: InputData
  ) {
    this.todo = data.todo;
  }

  close() {
    this.dialogRef.close({
      rta: true,
    });
  }
}
