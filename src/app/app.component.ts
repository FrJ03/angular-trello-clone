import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    OverlayModule,
    FontAwesomeModule,
    CdkAccordionModule,
    DragDropModule,
    ScrollingModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'trello-clone';
}
