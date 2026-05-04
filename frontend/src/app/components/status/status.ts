import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Workspace, Board } from '../../services/api.service';

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
  @Input() boards: Board[] = [];
  @Output() workspaceCreate = new EventEmitter<string>();
  @Output() boardCreate = new EventEmitter<{ name: string; workspaceId: number }>();

  workspaceName: string = '';

  createWorkspace() {
    const name = this.workspaceName.trim();

    if (!name) {
      return;
    }

    this.workspaceCreate.emit(name);
    this.workspaceName = '';
  }

  boardsForWorkspace(workspaceId: number): Board[] {
    return this.boards.filter((board) => board.workspaceId === workspaceId);
  }
}
