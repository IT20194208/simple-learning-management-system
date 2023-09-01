import axios from "axios";

const STUDENT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/student';

class StudentService{
    getAllStudents(){
        return axios.get(STUDENT_BASE_REST_API_URL+'/get-all-student');
    }
    createStudent(student){
        return axios.post(STUDENT_BASE_REST_API_URL+'/save',student);
    }
    getStudentById(studentId){
        return axios.get(STUDENT_BASE_REST_API_URL+'/get-by-id?id='+studentId);
    }
    updateStudent(studentId,student){
        return axios.put(STUDENT_BASE_REST_API_URL+'/update?id='+studentId,student);
    }
    deleteStudent(studentId){
        return axios.delete(STUDENT_BASE_REST_API_URL+'/delete-student/'+studentId)
    }
}
export default new StudentService();