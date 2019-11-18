import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../services/user.service';
import { User } from '../modelClasses/user';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;

  constructor(public userService: UserService,
    public authenticationService: AuthenticationService) { }

  ngOnInit() {
    // this.userService.getUserProfile().subscribe(
    // res => {
    //   this.userDetails = res['user'];
    //  },
    //  err => {
    //    console.log(err);

    //  }
    // );
    this.resetForm();
    this.refreshUserList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.userService.selectedUser = {
      _id: null,
      firstname: "",
      lastname: "",
      email: "",
      userName: "",
      password: "",
      address: "",
      city: "",
      country: "",
      postalCode: null,
      about: "",
      accessLevel: null,
      rateCVs: false,
      sendMails: false,
      interview: false
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.userService.postUser(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshUserList();

      });
    }
    else {
      this.userService.putUser(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshUserList();

      });
    }
  }

  refreshUserList() {
    this.userService.getUserList().subscribe((res) => {
      this.userService.users = res as User[];
    });
  }

}
