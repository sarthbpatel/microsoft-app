import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserInfo } from './user-info';
@Component({
  selector: 'ms-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  myInfo: UserInfo | undefined;



  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    console.log("Setting get request")
    this.showUserInfo()
  }

  getUserInfo() {
    return this.http.get<UserInfo>("https://app-eb37c-default-rtdb.firebaseio.com/my-info.json");

  }

  showUserInfo() {
    this.getUserInfo().subscribe(data => {
      console.log(data);
      this.myInfo = data;
    })
  }
}
