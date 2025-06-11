import { Component, Input, Output, EventEmitter, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonToggle } from "@ionic/angular/standalone";

@Component({
  selector: "storybook-toggle",
  standalone: true,
  imports: [CommonModule, IonToggle],
  templateUrl: "./toggle.component.html",
  styleUrls: ["./toggle.component.scss"],
})
export class ToggleComponent {
    @Input() checked: boolean = false;
    @Output() checkedChange = new EventEmitter<boolean>();
  
    toggleChanged(event?: any) {
      this.checked = event ? event.detail.checked : !this.checked;
      console.log("Nuevo estado del toggle:", this.checked); 
      this.checkedChange.emit(this.checked);
    }
  }
  
