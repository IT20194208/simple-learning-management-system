import axios from "axios";

//const STUDENT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/student';

class StudentService{
    getAllStudents(){
        return axios.get('http://localhost:8080/api/v1/student/get-all-student');
    }
    createStudent(student){
        return axios.post('http://localhost:8080/api/v1/student/save',student);
    }
}
export default new StudentService();