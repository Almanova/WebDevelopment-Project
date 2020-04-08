import { Component, OnInit } from '@angular/core';
import { TempService } from '../services/temp.service';
import { Section } from '../interfaces/section';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  sections: Section[];

  constructor(private sectionService: TempService) { }

  ngOnInit(): void {
    this.getSections();
  }

  getSections(): void {
    this.sectionService.getSections().subscribe(sections => this.sections = sections);
  }

}
