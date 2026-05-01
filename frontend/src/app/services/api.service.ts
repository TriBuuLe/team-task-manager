import { Injectable } from '@angular/core';


export interface Workspace {
    id: number;
    name: string;
}

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = 'http://localhost:8080';

    async getBackendMessage(): Promise<string> {
        const response = await fetch(`${this.baseUrl}`);
        return await response.text();
    }

    async getHealthStatus(): Promise<string> {
        const response = await fetch(`${this.baseUrl}/health`);
        return await response.text();
    }

    async getWorkspaces(): Promise<Workspace[]> {
        const response = await fetch(`${this.baseUrl}/workspaces`);
        return await response.json();
    }

    async createWorkspace(name: string): Promise<Workspace> {
        const response = await fetch(`${this.baseUrl}/workspaces`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        });

        return await response.json();
    }
}
