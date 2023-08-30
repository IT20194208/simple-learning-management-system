package com.lmsbackend.lmsbackend.controller;

import com.lmsbackend.lmsbackend.dto.StudentDto;
import com.lmsbackend.lmsbackend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String saveStudent(@RequestBody StudentDto studentDto){
        String message=studentService.saveStudent(studentDto);
        return message;
    }

}
