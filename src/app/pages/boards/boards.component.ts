import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faBox,
  faClock,
  faWaveSquare,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { CdkAccordion, CdkAccordionItem } from '@angular/cdk/accordion';

@Component({
  selector: 'app-boards',
  imports: [NavbarComponent, FaIconComponent, CdkAccordion, CdkAccordionItem],
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  faBox = faBox;
  faTrello = faTrello;
  faClock = faClock;
  faWaveSquare = faWaveSquare;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Item 1.1',
        },
        {
          label: 'Item 1.2',
        },
      ],
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Item 2.1',
        },
      ],
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Item 3.1',
        },
        {
          label: 'Item 3.2',
        },
        {
          label: 'Item 3.3',
        },
      ],
    },
  ];
}
