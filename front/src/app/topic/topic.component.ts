import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../interfaces/topic';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input() topicId: number;
  topic: Topic;
  showSubtopics = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getTopicByTopicId();
  }

  getTopicByTopicId(): void {
    this.apiService.getTopicByTopicId(this.topicId)
      .subscribe(topic => this.topic = topic);
  }

  showSubtopicsComponent(): void {
    if (this.showSubtopics) {
      this.showSubtopics = false;
    }
    else {
      this.showSubtopics = true;
    }
  }
}
