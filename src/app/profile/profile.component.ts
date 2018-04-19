import { Component, OnInit } from '@angular/core';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  profile: Array<object>;
  
  ngOnInit() {
     this.profileService.getUsers().subscribe(
      data => {
        this.profile = Array.of(data);
        console.log(data)
      },
      err => console.error(err)
     );
  }
  
}
