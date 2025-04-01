import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { faBell, faInfoCircle, faClose } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  imports: [BtnComponent, CdkOverlayOrigin, CdkConnectedOverlay, FaIconComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;
  isOpen = false;
}
