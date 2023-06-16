import { Component, OnInit } from "@angular/core";
import { AssociationService } from "app/services/association.service";
import { Association } from "app/models/association.model";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AssociationDialogComponent } from "./association-dialog/association-dialog.component";

@Component({
  selector: "app-association",
  templateUrl: "./association.component.html",
  styleUrls: ["./association.component.scss"],
})
export class AssociationComponent implements OnInit {
  associations: Association[];
  filteredAssociations: Association[];

  constructor(
    private associationService: AssociationService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadAssociations();
  }

  openAssociationDialog(association: Association) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "400px";
    dialogConfig.data = { association };

    const dialogRef = this.dialog.open(
      AssociationDialogComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log("Association updated successfully");
      }
    });
  }

  onDelete(id: number): void {
    const confirmed = window.confirm(
      "Are you sure you want to delete this association?"
    );
    if (confirmed) {
      this.associationService.deleteAssociation(id).subscribe(
        () => {
          this.associations = this.associations.filter(
            (association) => association.id !== id
          );
          this.filteredAssociations = this.filteredAssociations.filter(
            (association) => association.id !== id
          );

          console.log("Association deleted successfully.");
        },
        (error) => {
          console.error("Failed to delete association:", error);
        }
      );
    }
  }
  loadAssociations() {
    this.associationService.filterAssociations().subscribe(
      (response) => {
        this.associations = response.associations;
        this.filteredAssociations = response.associations;
        console.log(this.associations);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
