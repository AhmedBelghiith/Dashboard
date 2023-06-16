import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { AssociationComponent } from "app/association/association.component";

export const AdminLayoutRoutes: Routes = [
  { path: "association", component: AssociationComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "notifications", component: NotificationsComponent },
];
