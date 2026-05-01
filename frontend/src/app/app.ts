import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService, Workspace } from './services/api.service';
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

  constructor(
    private api: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.message = await this.api.getBackendMessage();
    this.healthStatus = await this.api.getHealthStatus();
    this.workspaces = await this.api.getWorkspaces();
    this.cdr.detectChanges();
  }

  async createWorkspace(name: string) {
    const workspace = await this.api.createWorkspace(name);
    this.workspaces = [...this.workspaces, workspace];
    this.cdr.detectChanges();
  }
}
