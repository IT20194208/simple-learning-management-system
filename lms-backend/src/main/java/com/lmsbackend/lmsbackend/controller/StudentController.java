package com.lmsbackend.lmsbackend.controller;

import com.lmsbackend.lmsbackend.dto.StudentDto;
import com.lmsbackend.lmsbackend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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
    @PostMapping("save")
    public StudentDto addStudent(@RequestBody StudentDto studentDto){
        return studentService.addStudent(studentDto);
    }
    @GetMapping(
            path = "/get-all-student"
    )
    public List<StudentDto> getAllstudents(){
        List<StudentDto> allstudentDto=studentService.getAllstudents();
        return allstudentDto;
    }
    @GetMapping(
            path = "/get-by-id",
            params = "id"
    )
    public StudentDto getStudentById(@RequestParam(value = "id") int Sid){
        return studentService.getStudentById(Sid);
        //path variable also can use instead of request param//
    }
    @PutMapping(
            path = "/update",
            params = "id"
    )
    public StudentDto updateStudentById(@RequestParam(value = "id")int Sid,@RequestBody StudentDto studentDto){
        return studentService.updateStudent(Sid,studentDto);
    }
    @DeleteMapping(
            path = "delete-student/{id}"
    )
    public String deleteStudent(@PathVariable(value = "id") int Sid){
        String message=studentService.deleteStudentByid(Sid);
        return message;
    }

}
