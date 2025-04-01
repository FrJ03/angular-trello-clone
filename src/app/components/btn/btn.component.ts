import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  imports: [],
  templateUrl: './btn.component.html',
})
export class BtnComponent {
  @Input() type: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'success' | 'primary' | 'red' | 'sky' | 'light' = 'success';

  colorMap = {
    success: {
      'bg-green-700': true,
      'hover:bg-green-800': true,
      'focus:ring-green-300': true,
      'text-white': true,
    },
    primary: {
      'bg-primary-700': true,
      'hover:bg-primary-800': true,
      'focus:ring-primary-300': true,
      'text-white': true,
    },
    red: {
      'bg-red-700': true,
      'hover:bg-red-800': true,
      'focus:ring-red-300': true,
      'text-white': true,
    },
    sky: {
      'bg-sky-700': true,
      'hover:bg-sky-800': true,
      'focus:ring-sky-300': true,
      'text-gray-700': true,
    },
    light: {
      'bg-gray-200': true,
      'hover:bg-gray-500': true,
      'focus:ring-gray-50': true,
      'text-gray-700': true,
    },
  };

  get colors() {
    const colors = this.colorMap[this.color];
    if (colors) {
      return colors;
    } else {
      return {};
    }
  }
}
