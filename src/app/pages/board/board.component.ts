import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ToDo } from '../../models/todo.model';
import { TodoColumn } from '../../models/todoColumn.model';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  imports: [NavbarComponent, DragDropModule],
  templateUrl: './board.component.html',
  styles: [
    `
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  columns: TodoColumn[] = [
    {
      title: 'To Do',
      todoList: [
        {
          id: '1',
          title: 'title 1',
        },
        {
          id: '2',
          title: 'title 2',
        },
        {
          id: '3',
          title: 'title 3',
        },
      ],
    },
    {
      title: 'Doing',
      todoList: [
        {
          id: '4',
          title: 'title 4',
        },
      ],
    },
    {
      title: 'Done',
      todoList: [
        {
          id: '5',
          title: 'title 5',
        },
      ],
    },
  ];

  constructor(private dialog: Dialog) {}

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todoList: [],
    });
  }

  addTask(currentContainer: ToDo[]) {
    console.log(currentContainer);
    currentContainer.push({
      id: '1',
      title: 'New task',
    });
  }

  dropColumn(event: CdkDragDrop<TodoColumn[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300PX',
      maxWidth: '50%',
      data: {
        todo: todo,
      },
    });

    dialogRef.closed.subscribe((output) => {
      console.log(output);
    });
  }
}
