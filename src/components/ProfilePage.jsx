import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Button } from "./common/Button";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { PiLinkSimpleLight } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="bg-black text-white col-span-6 h-full border-r-2 border-[#191919]">
      <NavBar />
      <ProfileInfo />
    </div>
  );
};
function NavBar() {
  return (
    <div className="flex gap-8 px-4 ">
      <IoArrowBack className="my-auto" size={22} />
      <div className="flex flex-col ">
        <span className="font-semibold text-lg">React</span>
        <span className="text-[11px] text-gray-600 font-semibold">
          2,611 posts
        </span>
      </div>
    </div>
  );
}
function ProfileInfo() {
  return (
    <>
      <div className="relative">
        <img className="w-full h-[200px]" src="./assets/react.jpg" />
        <img
          className="size-30 absolute -bottom-15 left-8 rounded-full ring-3 ring-black"
          src="./assets/react_profile.png"
        />
      </div>
      <div className="flex justify-end gap-2 p-2">
        <Button variant="icon">
          <IoIosMore size={20} />
        </Button>
        <Button variant="icon">
          <MdOutlineNotificationAdd size={20} />
        </Button>
        <Button variant="outline">Following</Button>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-col">
          <span className="font-semibold text-lg ">React</span>
          <span className="font-semibold text-[11px] truncate w-[106px] text-gray-600">
            @reactjs
          </span>
        </div>
        <p className="text-sm">
          The library for web and native user interfaces
        </p>
        <div className="flex gap-4 items-center">
          <div className="flex gap-1 items-center">
            <PiLinkSimpleLight size={18} className="text-gray-500" />
            <a
              className="text-blue-400 text-sm cursor-pointer"
              href="https://react.dev/"
            >
              react.dev
            </a>
          </div>
          <div className="flex gap-1 items-center">
            <FaRegCalendarAlt size={12} className="text-gray-500" />
            <span className="text-gray-500 text-sm cursor-pointer">
              Joined July 2013
            </span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-1 items-center text-sm">
            <span className="text-white">256</span>
            <span className="text-gray-500">Following</span>
          </div>
          <div className="flex gap-1 items-center text-sm">
            <span className="text-white">708.1K</span>
            <span className="text-gray-500">Followers</span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="relative min-w-[36px] h-4">
            <img
              className="size-4 absolute z-30 rounded-full ring-2 ring-black"
              src="./assets/profile_1.jpg"
            />
            <img
              className="size-4 absolute z-20 left-3 rounded-full ring-2 ring-black"
              src="./assets/profile.jpg"
            />
            <img
              className="size-4 absolute z-10 left-5 rounded-full ring-2 ring-black"
              src="./assets/profile_3.jpg"
            />
          </div>
          <span className="text-gray-500 text-sm">
            Followed by Mohamad Kukhun, Yazan Alasde, and 14 others you follow
          </span>
        </div>
      </div>
    </>
  );
}
export default ProfilePage;
