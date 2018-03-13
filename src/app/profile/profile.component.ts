import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  profile: object;
  
  ngOnInit() {
     this.profileService.getUsers().subscribe(
      data => {
        this.profile = Array.of(data);
        console.log(this.profile)
      },
      err => console.error(err)
     );
  }

}
