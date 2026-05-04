package com.tri.taskmanager.board;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody; 

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BoardController {

    private final BoardRepository boardRepository;

    public BoardController(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }

    @GetMapping("/boards")
    public List<Board> getBoards() {
        return boardRepository.findAll();
    }

    @PostMapping("/boards")
    public Board createBoard(@RequestBody Board board) {
        return boardRepository.save(board);
    }
}
