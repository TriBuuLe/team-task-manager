package com.tri.taskmanager;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloController {

    @GetMapping("/")
    public String home() {
        return "Task Manager Backend Running";
    }

    @GetMapping("/health")
    public String healthCheck() {
        return "OK";
    }

}