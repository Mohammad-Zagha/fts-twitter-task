import React from "react";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { TbHome2 } from "react-icons/tb";
import { RiNotification2Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { CiBookmark, CiCircleMore, CiViewList } from "react-icons/ci";
import { MdPeopleOutline } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
const Sidebar = () => {
  return (
    <div className="col-span-2 h-full flex justify-between flex-col max-lg:items-end max-sm:hidden bg-black border-r-2 border-[#191919]">
      <div className="flex flex-col gap-6">
        <img className="size-12" src="./assets/x_logo.jpg" />
        <SideBarItem
          icon={<TbHome2 size={26} className="shrink-0" />}
          text="Home"
        />
        <SideBarItem
          icon={<IoSearchOutline size={26} className="shrink-0" />}
          text="Explore"
        />
        <SideBarItem
          icon={<RiNotification2Line size={26} className="shrink-0" />}
          text="Notifications"
        />
        <SideBarItem
          icon={<HiOutlineMail size={26} className="shrink-0" />}
          text="Messages"
        />
        <SideBarItem
          icon={<CiViewList size={26} className="shrink-0" />}
          text="List"
        />
        <SideBarItem
          icon={<CiBookmark size={26} className="shrink-0" />}
          text="Bookmarks"
        />
        <SideBarItem
          icon={<MdPeopleOutline size={26} className="shrink-0" />}
          text="Communities"
        />
        <SideBarItem
          icon={<IoPersonOutline size={26} className="shrink-0" />}
          text="Profile"
        />
        <SideBarItem
          icon={<CiCircleMore size={26} className="shrink-0" />}
          text="More"
        />
        <button className="text-white font-semibold py-2 bg-[#1C9BF0] rounded-full m-4 max-lg:size-10">
          Post
        </button>
      </div>
      <SideBarFooter
        img={"./assets/profile.jpg"}
        userName={"@MohammadDwikat3"}
        fullName={"Mohammad Dwikat"}
      />
    </div>
  );
};
const SideBarItem = ({ icon, text }) => {
  return (
    <div className="flex gap-2 items-center font-semibold max-lg:justify-end  text-white px-6 ">
      {icon}
      <span className="max-lg:hidden">{text}</span>
    </div>
  );
};
function SideBarFooter({ img, userName, fullName }) {
  return (
    <div className="text-white flex justify-start gap-3 p-2 ">
      <img className="size-8 rounded-full" src={img} />
      <div className="flex flex-col">
        <span className="font-semibold text-[12px] truncate w-[107px]">
          {fullName}
        </span>
        <span className="font-semibold text-[11px] truncate w-[106px] text-gray-600">
          {userName}
        </span>
      </div>
      <IoIosMore className="text-white my-auto" />
    </div>
  );
}
export default Sidebar;
