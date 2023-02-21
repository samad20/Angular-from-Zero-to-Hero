import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  viewMode = '';
  post = {
    title: '',
    isFavoriteFromCourses: true,
  };
  likes = {
    likeCounter: 0,
    isLiked: false,
  };
  title = 'List of courses';
  courses;
  email: string = 'me@email.com';
  capital: string = '';
  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,

    releaseDate: new Date(2016, 3, 1),
  };
  onSave($event: any) {
    console.log('button was clicked', $event);
  }
  onKeyUp() {
    console.log(this.email);
  }
  onFavoriteChanged() {
    console.log('Favorite changed');
  }
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
