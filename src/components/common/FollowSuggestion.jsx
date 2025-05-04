import { MdVerified } from "react-icons/md";
import { Button } from "./Button";

export const FollowSuggestion = ({
  icon,
  profileImage,
  followText,
  name,
  username,
  verified,
  description,
}) => {
  return (
    <div className="flex p-1 px-2 gap-2">
      {/* Icon + Image */}
      <div className="flex flex-col items-end gap-1 w-[50px]">
        {icon}
        <img
          className="size-9 rounded-full ring-3 ring-black object-cover"
          src={profileImage}
          alt="profile"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full gap-0.5">
        <span className="text-[#6F6F6F] font-semibold text-xs">
          {followText}
        </span>

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-xs">{name}</span>
              {verified && (
                <MdVerified size={14} className="text-[#51A2FF] mt-1" />
              )}
            </div>
            <span className="text-[#6F6F6F] text-xs">@{username}</span>
          </div>
          <Button variant="default">Follow</Button>
        </div>

        <p className="text-xs font-semibold">{description}</p>
      </div>
    </div>
  );
};
