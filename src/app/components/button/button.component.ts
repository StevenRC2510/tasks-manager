import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { EButtonTypes } from './button.enum';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() label = '';
  @Input() customClasses = '';
  @Input() type: EButtonTypes = EButtonTypes.PRIMARY;
  @Input() disabled = false;

  @Output() clickAction = new EventEmitter<void>();

  public commonStyles =
    'text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-slate-400';

  classNameStyle = {
    [EButtonTypes.PRIMARY]: `${this.commonStyles} bg-custom-purple`,
    [EButtonTypes.NEUTRAL]: `${this.commonStyles} bg-black `,
    [EButtonTypes.SUCCESS]: `${this.commonStyles} bg-green-600`,
    [EButtonTypes.ERROR]: `${this.commonStyles} bg-red-600`,
  };

  getClassNameStyle(): string {
    return this.classNameStyle[this.type];
  }
}
