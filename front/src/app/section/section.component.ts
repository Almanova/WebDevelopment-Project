import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../interfaces/section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input() current: Section;

  constructor() { }

  ngOnInit(): void {
  }

}
