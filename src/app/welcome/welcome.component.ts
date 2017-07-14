import { Component } from '@angular/core';
import { ClubSearchService } from '../club-search.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ClubSearchService]
})
export class WelcomeComponent {

}
