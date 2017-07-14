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

  submitForm(club: string,
    league: string,
    clubName: string,
    manager: string,
    managerPhone: string,
    managerEmail: string,
    teamLogo: string,
    teamHomeKit: string,
    teamAwayKit: string,
    clubId: string,
    roster: string,
    playerFirstName: string,
    playerLastName: string,
    playerNumber: string,
    playerPosition: string,
    OGFC: boolean,
    WSFC: boolean) {
    const newClub: Club = new Club(club, league, clubName, manager, managerPhone, managerEmail, teamLogo, teamHomeKit, teamAwayKit, clubId, roster, playerFirstName, playerLastName, playerNumber, playerPosition, OGFC, WSFC);
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
