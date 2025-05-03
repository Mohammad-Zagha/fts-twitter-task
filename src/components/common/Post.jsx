import { CgLoadbarSound } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";

const Post = ({
  isRepost,
  profileImage,
  displayName,
  username,
  date,
  content,
  comments,
  retweets,
  likes,
  views,
}) => {
  return (
    <div className="flex p-1 px-2 gap-2 border-b border-[#191919]">
      <div className="flex flex-col items-end gap-2 w-[50px]">
        {isRepost && <FaRetweet size={18} className="text-[#6F6F6F]" />}
        <img
          className="size-9 rounded-full ring-3 ring-black object-cover"
          src={profileImage}
          alt="profile"
        />
      </div>

      {/* Main Body */}
      <div className="flex flex-col w-full">
        {isRepost && (
          <span className="font-semibold text-[12px] text-[#6F6F6F]">
            Reposted
          </span>
        )}

        {/* Name + Date */}
        <div className="flex justify-between items-center">
          <div className="flex gap-0.5 text-xs">
            <span className="font-semibold">{displayName}</span>
            <span className="font-semibold text-[#6F6F6F]">@{username}</span>
            <span className="font-semibold text-[#6F6F6F]">.</span>
            <span className="font-semibold text-[#6F6F6F]">{date}</span>
          </div>
          <IoIosMore className="text-[#6F6F6F]" size={18} />
        </div>

        {/* Content */}
        <p className="text-xs font-semibold">{content}</p>

        {/* Analytics */}
        <div className="flex justify-between">
          <div className="flex gap-12 text-[#6F6F6F] text-xs mt-2">
            <AnalyticItem icon={<FaRegComment />} value={comments} />
            <AnalyticItem icon={<FaRetweet size={16} />} value={retweets} />
            <AnalyticItem icon={<CiHeart size={18} />} value={likes} />
            <AnalyticItem icon={<CgLoadbarSound size={18} />} value={views} />
          </div>
          <AnalyticItem icon={<MdOutlineFileUpload size={18} />} value="" />
        </div>
      </div>
    </div>
  );
};
function AnalyticItem({ icon, value }) {
  return (
    <div className="flex items-center gap-2 text-[#6F6F6F] cursor-pointer">
      {icon}
      {value && <span className="font-semibold text-xs ">{value}</span>}
    </div>
  );
}
export default Post;
