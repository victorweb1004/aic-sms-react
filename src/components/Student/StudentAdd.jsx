import { useState, useEffect } from "react";
import VerticalLineLeft from "../ContentTitle";
import { db } from "../../firebase-config";
import { collection, Firestore, setDoc, doc } from "firebase/firestore";

function StudentAdd() {
  // Define state for data we get from Form
  const [newName, setNewName] = useState("");
  const [newBirthday, setNewBirthday] = useState({});
  const [newGender, setNewGender] = useState(true);
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newCourses, setNewCourses] = useState([]);

  // Define state for visiblility
  const [visible, setVisible] = useState(false);
  


  const CreateUser = async () => {};

  return (
    <>
      <div className="mx-8 mt-8 rounded-2xl bg-white p-8 text-base shadow">
        <VerticalLineLeft desc="Thêm học viên" />
        <form className="flex flex-col" action="">
          {/* Student Name input */}
          <div className="flex flex-row items-center py-4">
            <label htmlFor="name" className="w-[220px]">
              Họ và tên học viên<marked className="text-red-500">*</marked>
            </label>
            <input
              onChange={(event) => {
                setNewName(event.target.value);
              }}
              id="name"
              type="text"
              className="w-full rounded-xl border-[0.5px] border-[#cccccc] px-4 leading-10 focus:outline-none"
            />
          </div>
          {/* Student Birthday + Gender Input */}
          <div className="flex flex-row items-center py-4">
            {/* Student Birthday input */}
            <div className="mr-12 flex w-full flex-row items-center">
              <label htmlFor="birthday" className="w-[240px] ">
                Ngày sinh<marked className="text-red-500">*</marked>
              </label>
              <input
                onChange={(event) => {
                  setNewBirthday(event.target.value);
                }}
                id="birthday"
                type="date"
                className="w-full rounded-xl border-[0.5px] border-[#cccccc] px-4 text-base leading-10 focus:outline-none"
              />
            </div>
            {/* Gender radio input */}
            <div className="flex flex-row items-center">
              <label htmlFor="gender" className="whitespace-nowrap pr-4">
                Giới tính<marked className="text-red-500">*</marked>
              </label>
              <select
                id="gender"
                name="gender"
                className="rounded-xl border border-[#cccccc] p-2 py-2.5 focus:outline-none"
              >
                <option value="none" selected>
                  Chọn
                </option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
              </select>
            </div>
          </div>

          {/* Student PhoneNumber Input */}
          <div className="flex flex-row items-center py-4">
            <label htmlFor="phoneNumber" className="w-[220px]">
              Số điện thoại<marked className="text-red-500">*</marked>
            </label>
            <input
              id="phoneNumber"
              type="text"
              className="w-full rounded-xl border-[0.5px] border-[#cccccc] px-4 text-base leading-10 focus:outline-none"
            />
          </div>
          <div className="flex flex-row items-center py-4">
            <label htmlFor="email" className="w-[220px]">
              Email<marked className="text-red-500">*</marked>
            </label>
            <input
              id="phoneNumber"
              type="text"
              className="w-full rounded-xl border-[0.5px] border-[#cccccc] px-4 text-base leading-10 focus:outline-none"
            />
          </div>

          {/* Code for Javascript */}

          <div className="flex flex-row items-center py-4">
            <label htmlFor="courses" className="w-[180px]">
              Các khóa học<marked className="text-red-500">*</marked>
            </label>
            <select
              id="coursesSelector"
              name="Các lớp dài hạn"
              className="rounded-xl border border-[#cccccc] p-16 py-2.5 focus:outline-none"
            >
              <option value="longterm" selected>
                Các lớp dài hạn
              </option>
              <option value="aiday">AI Day</option>
              <option value="aiex">AI Experience</option>
            </select>
          </div>

          <div className="flex flex-row  py-4">
            <label htmlFor="courses" className="w-[220px]">
              Chọn lớp học
              <marked className="text-red-500">*</marked>
            </label>
            <div className="w-full border-2 border-[#cccccc] bg-green-600">
                <div className="mb-4 p-4 bg-white rounded-2xl">dasdsa</div>
                <div className="mb-4 p-4 bg-white rounded-2xl">fdsfdsf</div>
                <div className=" p-4 bg-white rounded-2xl">feraf</div>
            </div>
          </div>

          <button
            onClick={CreateUser}
            className="mt-4 rounded-xl bg-green-600 p-4 text-xl font-semibold text-white duration-200 ease-in-out hover:bg-green-700 "
          >
            Xác nhận
          </button>
        </form>
      </div>
    </>
  );
}

export default StudentAdd;
