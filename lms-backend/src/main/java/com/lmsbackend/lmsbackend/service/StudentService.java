package com.lmsbackend.lmsbackend.service;

import com.lmsbackend.lmsbackend.dto.StudentDto;

import java.util.List;

public interface StudentService {
    String saveStudent(StudentDto studentDto);

    List<StudentDto> getAllstudents();

    StudentDto addStudent(StudentDto studentDto);

    StudentDto getStudentById(int Sid);

    StudentDto updateStudent(int sid, StudentDto studentDto);

    String deleteStudentByid(int sid);
}
