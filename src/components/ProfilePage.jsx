import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Button } from "./common/Button";
import { MdOutlineNotificationAdd, MdVerified } from "react-icons/md";
import { IoIosMore, IoMdPerson } from "react-icons/io";
import { PiLinkSimpleLight } from "react-icons/pi";
import { FaRegCalendarAlt, FaRetweet } from "react-icons/fa";

import Post from "./common/Post";
import { FollowSuggestion } from "./common/FollowSuggestion";

const ProfilePage = () => {
  return (
    <div className="bg-black text-white col-span-6 h-full sm:border-r-2 border-[#191919] max-sm:col-span-full">
      <NavBar />
      <ProfileInfo />
      <ProfileTapBar />
      <Post
        isRepost={true}
        profileImage="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0="
        displayName="danabrampv.bsky.social"
        username="dan_abramov"
        date="May 29"
        content={
          <>
            Happy 10th birthday to&nbsp;
            <span className="text-blue-400 text-sm cursor-pointer">@react</span>
          </>
        }
        comments="49"
        retweets="675"
        likes="675"
        views="1.1M"
      />
      <div className="px-3 py-1 space-y-2">
        <span className="text-lg font-bold">Who to follow</span>
        <FollowSuggestion
          icon={<IoMdPerson size={14} className="text-[#6F6F6F]" />}
          profileImage="./assets/freeCodeCamp.jpg"
          followText="Node.js and 9 other follow"
          name="freeCodeCamp.org"
          username="freecodecamp"
          verified={true}
          description={
            "We're a community of millions of people who are building new skills and getting new jobs together. A 501(c)(3) public charity. Tweets by @abbeyrenn"
          }
        />
        <FollowSuggestion
          icon={<IoMdPerson size={14} className="text-[#6F6F6F]" />}
          profileImage="https://pbs.twimg.com/profile_images/1648471227416346625/v84A9gXA_400x400.png"
          followText="Node.js and 5 other follow"
          name="TypeScript"
          username="typescript"
          verified={true}
          description={
            "TypeScript is a language for application-scale JavaScript development. It's a typed superset of JavaScript that compiles to plain JavaScript."
          }
        />
        <FollowSuggestion
          icon={<IoMdPerson size={14} className="text-[#6F6F6F]" />}
          profileImage="https://www.drupal.org/files/project-images/screenshot_361.png"
          followText="Yazeed Obaid and 3 other follow"
          name="Tailwind CSS"
          username="tailwindcss"
          verified={true}
          description={
            "The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML."
          }
        />
      </div>
      <a href="#" className="text-blue-400 text-sm cursor-pointer ms-2">
        Show More
      </a>
    </div>
  );
};
function NavBar() {
  return (
    <div className="flex gap-8  ">
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
      <div className="relative w-full">
        <img
          className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
          src="./assets/react.jpg"
          alt="Cover"
        />
        <img
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full absolute -bottom-10 left-4 sm:left-6 ring-4 ring-black object-cover"
          src="./assets/react_profile.png"
          alt="Profile"
        />
      </div>

      <div className="flex justify-end gap-2 p-4 mt-10">
        <Button variant="icon">
          <IoIosMore size={20} />
        </Button>
        <Button variant="icon">
          <MdOutlineNotificationAdd size={20} />
        </Button>
        <Button variant="outline">Following</Button>
      </div>

      <div className="flex flex-col gap-2 px-4 pb-4">
        <div className="flex flex-col">
          <span className="font-semibold text-lg">React</span>
          <span className="font-semibold text-sm text-gray-600 truncate max-w-[120px]">
            @reactjs
          </span>
        </div>

        <p className="text-sm">
          The library for web and native user interfaces
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex gap-1 items-center">
            <PiLinkSimpleLight size={18} className="text-gray-500" />
            <a
              className="text-blue-400 text-sm cursor-pointer"
              href="https://react.dev/"
              target="_blank"
            >
              react.dev
            </a>
          </div>
          <div className="flex gap-1 items-center">
            <FaRegCalendarAlt size={12} className="text-gray-500" />
            <span className="text-gray-500 text-sm">Joined July 2013</span>
          </div>
        </div>

        <div className="flex gap-4 items-center text-sm">
          <div className="flex gap-1 items-center">
            <span className="text-white">256</span>
            <span className="text-gray-500">Following</span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-white">708.1K</span>
            <span className="text-gray-500">Followers</span>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="relative min-w-[36px] h-4">
            <img
              className="size-4 absolute z-30 rounded-full ring-2 ring-black"
              src="./assets/profile_1.jpg"
              alt=""
            />
            <img
              className="size-4 absolute z-20 left-3 rounded-full ring-2 ring-black"
              src="./assets/profile.jpg"
              alt=""
            />
            <img
              className="size-4 absolute z-10 left-5 rounded-full ring-2 ring-black"
              src="./assets/profile_3.jpg"
              alt=""
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

function ProfileTapBar() {
  const [activeTab, setActiveTab] = useState("posts");

  const tabs = [
    { id: "posts", label: "Posts" },
    { id: "replies", label: "Replies" },
    { id: "media", label: "Media" },
    { id: "likes", label: "Likes" },
  ];
  return (
    <div className="flex justify-between border-b border-[#191919]">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="flex flex-col items-center flex-1 cursor-pointer"
          onClick={() => setActiveTab(tab.id)}
        >
          <div className="py-4 px-2 relative">
            <span
              className={`font-semibold text-sm ${
                activeTab === tab.id ? "text-white" : "text-gray-500"
              }`}
            >
              {tab.label}
            </span>
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-t"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfilePage;
