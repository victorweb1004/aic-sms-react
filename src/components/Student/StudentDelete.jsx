import { useState, useEffect } from "react";
import VerticalLineLeft from "../ContentTitle";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import moment from "moment";


function StudentDelete() {

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
      <div className="mx-8 mt-8 rounded-2xl bg-white p-8 text-base shadow">
        <VerticalLineLeft desc="Xóa học viên" />
        <div className="relative mb-8 flex w-full flex-row items-center">
          <label htmlFor="search" className="mr-4">
            Tìm kiếm học viên theo tên
          </label>
          <input
            id="search "
            type="text"
            className="grow rounded-xl border border-[#cccccc] px-8 leading-10 outline-none"
          />
          <button className="absolute right-0 h-full rounded-xl bg-green-600 px-8 font-semibold text-white ">
            Tìm
          </button>
        </div>
        <VerticalLineLeft desc="Kết quả tìm kiếm" />
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
              <div className="grid grid-cols-5 text-base">
                <span className="border-b border-r  border-[#cccccc] text-center overflow-clip whitespace-nowrap">
                  {student.name}
                </span>
                <span className="border-b border-r  border-[#cccccc] text-center overflow-clip whitespace-nowrap">
                  {moment(birthdayDate).format("DD/MM/YYYY")}
                </span>
                <span className="border-b border-r  border-[#cccccc] text-center overflow-clip whitespace-nowrap">
                  {GenderHandle(student.gender)}
                </span>
                <span className="border-b border-r  border-[#cccccc] text-center overflow-clip whitespace-nowrap">
                  {student.phone}
                </span>
                <span className="border-b border-r  border-[#cccccc] text-center overflow-clip whitespace-nowrap">
                  {student.email}
                </span>
              </div>
            );
          })}
          {/* Thực hiện câu truy vấn sau đó đưa ra danh sách  */}
        </div>
      </div>
    </>
  );
}

export default StudentDelete;
