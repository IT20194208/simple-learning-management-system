package com.lmsbackend.lmsbackend.service.serviceImpl;

import com.lmsbackend.lmsbackend.dto.StudentDto;
import com.lmsbackend.lmsbackend.entity.StudentEntity;
import com.lmsbackend.lmsbackend.repository.StudentRepository;
import com.lmsbackend.lmsbackend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public String saveStudent(StudentDto studentDto) {
        StudentEntity student=new StudentEntity(
                studentDto.getSid(),
                studentDto.getName(),
                studentDto.getAddress(),
                studentDto.getTel(),
                studentDto.getNic()
        );
        studentRepository.save(student);
        return "student"+studentDto.getName()+" adding successfully!!!";
    }
}
