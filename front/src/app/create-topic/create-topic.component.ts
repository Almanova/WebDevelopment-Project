import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Section } from '../interfaces/section';
import { Topic } from '../interfaces/topic';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})
export class CreateTopicComponent implements OnInit {
  @Input() section: Section;
  topics: Topic[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics(): void {
    this.apiService.getTopics()
      .subscribe(topics => this.topics = topics);
  }

  generateTopicId(): number {
    return this.topics[this.topics.length - 1].id + 1;
  }

  add(name: string, description: string): void {
    const topicId = this.generateTopicId();
    const name1: string = name;
    const des: string = description;
    const topic: Topic = {
      id: 9,
      sectionId: this.section.id,
      name: name1,
      description: des,
      subtopics: []
    }
    this.apiService.addTopic(topic)
      .subscribe(top => {
        this.topics.push(top);
      });
  }
}
