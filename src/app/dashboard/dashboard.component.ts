import { Component, OnInit } from "@angular/core";
import { Association } from "app/models/association.model";
import { User } from "app/models/user.model";
import { AssociationService } from "app/services/association.service";
import { UserService } from "app/services/user.service";
import * as Chartist from "chartist";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  users: number;
  filteredUsers: User[];
  associations: number;
  filteredAssociations: Association[];

  constructor(
    private userService: UserService,
    private associationService: AssociationService
  ) {}
  loadUsers() {
    this.userService.filterUsers().subscribe(
      (response) => {
        this.users = response.totalItems;
        this.filteredUsers = response.users;
        console.log(this.users);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadAssociations() {
    this.associationService.filterAssociations().subscribe(
      (response) => {
        this.associations = response.totalItems;
        this.filteredAssociations = response.associations;
        console.log(this.associations);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.loadUsers();
    this.loadAssociations();
  }
}
