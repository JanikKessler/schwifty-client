import {Component, ElementRef, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input({required: true}) sectionId!: string;
  @Input({required: true}) mainHeaderText!: string;
  @Input() subHeaderText: string | undefined;


}
