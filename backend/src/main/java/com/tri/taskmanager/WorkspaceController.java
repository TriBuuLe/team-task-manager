package com.tri.taskmanager;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class WorkspaceController {

    private final WorkspaceRepository workspaceRepository;

    public WorkspaceController(WorkspaceRepository workspaceRepository) {
        this.workspaceRepository = workspaceRepository;
    }

    @GetMapping("/workspaces")
    public List<Workspace> getWorkspaces() {
        return workspaceRepository.findAll();
    }

    @PostMapping("/workspaces")
    public Workspace createWorkspace(@RequestBody Workspace workspace) {
        return workspaceRepository.save(workspace);
    }
}
