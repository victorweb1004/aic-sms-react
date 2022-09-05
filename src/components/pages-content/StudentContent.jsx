import StudentAdd from "../Student/StudentAdd";
import StudentDelete from "../Student/StudentDelete";
import StudentList from "../Student/StudentList";


function StudentContent() {
  return (
    <>
        <StudentList />
        <StudentAdd />
        <StudentDelete />
    </>
  );
}

export default StudentContent;
