import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : any;
  constructor(private userService : UserService) { }

  ngOnInit() {
    let usersResp = this.userService.getUsersResp();
    usersResp.subscribe(dataInResp => console.log(dataInResp));
    usersResp.subscribe(dataInResp => this.users = dataInResp);
  }

}
