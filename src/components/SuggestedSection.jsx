import React from "react";
import { BiSearch } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import { Button } from "./common/Button";
import TrendingItem from "./common/TrendingItem";

const SuggestedSection = () => {
  return (
    <aside className="hidden sm:flex flex-col gap-4 px-4 xl:px-8 col-span-full sm:col-span-4">
      {/* Search Box */}
      <div className="flex items-center bg-[#202427] text-gray-600 rounded-full px-3 py-2">
        <BiSearch className="size-5 mr-2 text-gray-400" />
        <input
          className="bg-transparent outline-none text-white placeholder:text-gray-600 w-full"
          placeholder="Search"
          type="text"
        />
      </div>

      {/* Suggested Profiles */}
      <div className="rounded-xl bg-[#202427] flex flex-col gap-6 p-4">
        <span className="text-lg font-bold text-white">You might like</span>
        <ProfileHeader />
        <ProfileHeader
          name="TypeScript"
          avatarUrl="https://pbs.twimg.com/profile_images/1648471227416346625/v84A9gXA_400x400.png"
          username="@typescript"
        />
        <ProfileHeader
          name="freeCodeCamp.org"
          avatarUrl="./assets/freeCodeCamp.jpg"
          username="@freecodecamp"
        />
      </div>

      {/* Trends */}
      <div className="rounded-xl bg-[#202427] flex flex-col gap-6 p-4">
        <span className="text-lg font-bold text-white">Trends for you</span>
        <TrendingItem
          category="Gaming · Trending"
          title="#VALORANTChampions"
          postCount="27.9K posts"
        />
        <TrendingItem title="الانستا" postCount="1,411 posts" />
        <TrendingItem
          category="Gaming · Trending"
          title="Mako"
          postCount="14,1K posts"
        />
        <TrendingItem title="رسالة_اليوم#" postCount="22,3K posts" />
        <TrendingItem title="#Messi" postCount="77.2K posts" />
        <TrendingItem title="جامعة_طيبة#" postCount="" />
        <TrendingItem title="ايفون" postCount="27,6K posts" />
        <TrendingItem title="fantic" postCount="8,748 posts" />
        <TrendingItem title="الاعلام العبري" postCount="" />
        <TrendingItem title="#interMiamiCF" postCount="8,748 posts" />

        <a href="#" className="text-blue-400 text-sm cursor-pointer">
          Show More
        </a>
      </div>
    </aside>
  );
};

function ProfileHeader({
  name = "Tailwind CSS",
  username = "@tailwindcss",
  avatarUrl = "https://www.drupal.org/files/project-images/screenshot_361.png",
  isVerified = true,
  showFollowButton = true,
}) {
  return (
    <div className="w-full flex justify-between items-center gap-4">
      <div className="flex items-center gap-3 min-w-0">
        <img
          className="w-10 h-10 rounded-full object-cover shrink-0"
          src={avatarUrl}
          alt="profile"
        />
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1 truncate">
            <span className="font-semibold text-sm text-white truncate">
              {name}
            </span>
            {isVerified && (
              <MdVerified size={14} className="text-[#51A2FF] mt-[2px]" />
            )}
          </div>
          <span className="text-[#6F6F6F] text-xs font-bold truncate">
            {username}
          </span>
        </div>
      </div>
      {showFollowButton && (
        <Button variant="default" className="h-8 px-4 shrink-0">
          Follow
        </Button>
      )}
    </div>
  );
}

export default SuggestedSection;
