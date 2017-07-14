import { Component, OnInit } from '@angular/core';
import { Club } from '../club.model';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ClubService]
})
export class AdminComponent implements OnInit {
  addClubForm: boolean = false;
  addClubButton: boolean = true;
  constructor(private clubService: ClubService) { }

  ngOnInit() {
  }

  submitForm(
    league: string,
    clubName: string,
    manager: string,
    managerPhone: string,
    managerEmail: string,
    teamLogo: string,
    teamHomeKit: string,
    teamAwayKit: string,
    clubId: string) {
    const newClub: Club = new Club(league, clubName, manager, managerPhone, managerEmail, teamLogo, teamHomeKit, teamAwayKit, clubId);
    this.clubService.addClub(newClub);
    this.addClubForm = false;
  }

  showAddClubForm() {
  this.addClubForm = true;
  this.addClubButton = false;
  }

  hideAddClubForm() {
    this.addClubForm = false;
  }

}
