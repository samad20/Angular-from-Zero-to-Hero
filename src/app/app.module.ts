import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from './title-case.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { InputFormatDirective } from './input-format.directive';

@NgModule({
  declarations: [AppComponent, CoursesComponent, TitleCasePipe, FavoriteComponent, PanelComponent, LikeButtonComponent, InputFormatDirective],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
