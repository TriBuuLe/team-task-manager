import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Workspace } from '../../services/api.service';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './status.html',
  styleUrl: './status.css'
})
export class StatusComponent {
  @Input() message: string = '';
  @Input() healthStatus: string = '';
  @Input() workspaces: Workspace[] = [];
  @Output() workspaceCreate = new EventEmitter<string>();

  workspaceName: string = '';

  createWorkspace() {
    const name = this.workspaceName.trim();

    if (!name) {
      return;
    }

    this.workspaceCreate.emit(name);
    this.workspaceName = '';
  }
}
