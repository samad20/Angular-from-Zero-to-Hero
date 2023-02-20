import { Component, Input } from '@angular/core';

@Component({
  selector: 'like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss'],
})
export class LikeButtonComponent {
  @Input('likeCounter') likeCounter: number = 20;
  @Input('isLiked')
  isLiked: boolean = true;
  onClick() {
    this.likeCounter += this.isLiked ? -1 : 1;
    this.isLiked = !this.isLiked;
  }
}
