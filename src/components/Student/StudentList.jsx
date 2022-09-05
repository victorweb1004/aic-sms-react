import { useState, useEffect, usersCollectionRef } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import ContentTitle from "../ContentTitle";
import moment from "moment";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const usersCollectionRef = collection(db, "students");

  useEffect(() => {
    const getStudents = async () => {
      const data = await getDocs(usersCollectionRef);
      setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getStudents();  
  }, []);

  function GenderHandle(props) {
    if (props === true) {
      return "Nam";
    }
    return "Nữ";
  }

  return (
    <>
      <div className="m-8 rounded-2xl bg-white p-8 text-base shadow">
        <ContentTitle desc="Danh sách học viên" />
        <div className="overflow-hidden rounded-2xl border border-b-0 border-[#cccccc] text-lg">
          <div className="grid grid-cols-5 justify-between gap-x-2 gap-y-4 bg-green-600 p-2 font-semibold text-white">
            <h1 className="text-center">Tên</h1>
            <h1 className="text-center">Ngày sinh</h1>
            <h1 className="text-center">Giới tính</h1>
            <h1 className="text-center">Số điện thoại</h1>
            <h1 className="text-center">Email</h1>
          </div>
          {students.map((student) => {
            var birthdayDate = new Date(student.birthday.seconds * 1000);
            console.log(student.courses);
            return (
              <div className="grid grid-cols-5 gap-y-4 text-base">
                <span className="border-b border-r  border-[#cccccc] text-center">
                  {student.name}
                </span>
                <span className="border-b border-r  border-[#cccccc] text-center">
                  {moment(birthdayDate).format("DD/MM/YYYY")}
                </span>
                <span className="border-b border-r  border-[#cccccc] text-center">
                  {GenderHandle(student.gender)}
                </span>
                <span className="border-b border-r  border-[#cccccc] text-center">
                  {student.phone}
                </span>
                <span className="border-b border-r  border-[#cccccc] text-center">
                  {student.email}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StudentList;
