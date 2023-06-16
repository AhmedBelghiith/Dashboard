import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Association } from "app/models/association.model";
import { UpdateAssociation } from "app/models/updateAssociation.model";
import { AssociationService } from "app/services/association.service";

@Component({
  selector: "app-association-dialog",
  templateUrl: "./association-dialog.component.html",
  styleUrls: ["./association-dialog.component.scss"],
})
export class AssociationDialogComponent {
  association: Association;

  constructor(
    private dialogRef: MatDialogRef<AssociationDialogComponent>,
    private associationService: AssociationService,
    @Inject(MAT_DIALOG_DATA) public data: { association: Association }
  ) {
    this.association = { ...data.association };
  }

  saveAssociation() {
    const associationData: UpdateAssociation = {
      associationId: this.association.id,
      name: this.association.name,
      phoneNumber: this.association.phoneNumber,
      adress: this.association.adress,
      mail: this.association.email,
      userId: this.association.user.id,
    };

    this.associationService.updateAssociation(associationData).subscribe(
      () => {
        console.log("Association updated successfully");
        this.dialogRef.close(true);
        window.location.reload();
      },
      (error) => {
        console.error("Failed to update association:", error);
      }
    );
  }

  cancelDialog() {
    this.dialogRef.close(false);
    window.location.reload();
  }
}
