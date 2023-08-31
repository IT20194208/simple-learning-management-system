package com.lmsbackend.lmsbackend.service.serviceImpl;

import com.lmsbackend.lmsbackend.dto.StudentDto;
import com.lmsbackend.lmsbackend.entity.StudentEntity;
import com.lmsbackend.lmsbackend.exception.ResourseNotFoundException;
import com.lmsbackend.lmsbackend.repository.StudentRepository;
import com.lmsbackend.lmsbackend.service.StudentService;
import net.bytebuddy.implementation.bytecode.Throw;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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

    @Override
    public List<StudentDto> getAllstudents() {
        List<StudentEntity> getStudents=studentRepository.findAll();
        List<StudentDto> studentDtoList=new ArrayList<>();
        for(StudentEntity student : getStudents){
            StudentDto studto=new StudentDto(
                    student.getSid(),
                    student.getName(),
                    student.getAddress(),
                    student.getTel(),
                    student.getNic()
            );
            studentDtoList.add(studto);
        }
        return studentDtoList;
    }

    @Override
    public StudentDto addStudent(StudentDto studentDto) {
        StudentEntity student=new StudentEntity(
                studentDto.getSid(),
                studentDto.getName(),
                studentDto.getAddress(),
                studentDto.getTel(),
                studentDto.getNic()
        );
        studentRepository.save(student);
        return studentDto;
    }

    @Override
    public StudentDto getStudentById(int Sid) {
        if(studentRepository.existsById(Sid)){
            StudentEntity stuEntity = studentRepository.getReferenceById(Sid);
            StudentDto studentDto = new StudentDto(
                    stuEntity.getSid(),
                    stuEntity.getName(),
                    stuEntity.getAddress(),
                    stuEntity.getTel(),
                    stuEntity.getNic()
            );
            return studentDto;
        }
        else {
            throw new RuntimeException("no student related to input id");
        }
    }

    @Override
    public StudentDto updateStudent(int sid, StudentDto studentDto) {
        StudentEntity updateStudent=studentRepository.findById(sid)
                .orElseThrow(() ->new ResourseNotFoundException("Student not exist with id: " + sid));

        updateStudent.setName(studentDto.getName());
        updateStudent.setTel(studentDto.getTel());
        updateStudent.setAddress(studentDto.getAddress());

        studentRepository.save(updateStudent);
        return studentDto;
    }

    @Override
    public String deleteStudentByid(int sid) {
        if(studentRepository.existsById(sid)){
            studentRepository.deleteById(sid);
            return "student deleted successfully!!!";
        }else{
            throw new RuntimeException("no that kind of id");
        }
    }
}
