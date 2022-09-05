import { useState, useEffect, usersCollectionRef } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import ContentTitle from "../ContentTitle";
import moment from "moment";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const usersCollectionRef = collection(db, "teachers");

  useEffect(() => {
    const getTeachers = async () => {
      const data = await getDocs(usersCollectionRef);
      setTeachers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTeachers();
  }, []);


  return (
    <>
      <div className="m-8 rounded-2xl bg-white p-8 text-base shadow">
        <ContentTitle desc="Danh sách giảng viên" />
        <div className="overflow-hidden rounded-2xl border border-[#cccccc] text-lg">
          <div className="grid grid-cols-3 justify-between gap-x-2 gap-y-4 bg-green-600 p-2 font-semibold text-white">
            <h1 className="text-center">Tên</h1>
            <h1 className="text-center">Số điện thoại</h1>
            <h1 className="text-center">Email</h1>
          </div>
          {teachers.map((teacher) => {

            return (
              <div className="grid grid-cols-3 gap-y-4 text-base">
                <span className="border-b border-r  border-[#cccccc] text-center">
                  {teacher.name}
                </span>
                <span className="border-b border-r  border-[#cccccc] text-center">
                  {teacher.phone}
                </span>
                <span className="border-b border-r  border-[#cccccc] text-center">
                  {teacher.email}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TeacherList;
