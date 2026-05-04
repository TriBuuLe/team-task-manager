import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService, Workspace, Board } from './services/api.service';
import { StatusComponent } from './components/status/status';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StatusComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  message: string = '';
  healthStatus: string = '';
  workspaces: Workspace[] = [];
  boards: Board[] = [];

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.message = await this.apiService.getBackendMessage();
    this.healthStatus = await this.apiService.getHealthStatus();
    this.workspaces = await this.apiService.getWorkspaces();
    this.boards = await this.apiService.getBoards();
    this.cdr.detectChanges();
  }

  async createWorkspace(name: string) {
    const workspace = await this.apiService.createWorkspace(name);
    this.workspaces = [...this.workspaces, workspace];
    this.cdr.detectChanges();
  }

  async createBoard(event: { name: string; workspaceId: number }) {
    const board = await this.apiService.createBoard(event.name, event.workspaceId);
    this.boards = [...this.boards, board];
    this.cdr.detectChanges();
  }
}
