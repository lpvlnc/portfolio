import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() type: string | undefined = 'text';
  @Input() rows: string | undefined = '1';
  @Input() cols: string | undefined = '1';
  constructor () { }
}
