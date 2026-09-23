import { FaEllipsisH } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { mockFollowList, mockPostData, mockProfileData } from "../../util/mockData";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { BsPatchPlus } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

export const MainContent = () => {
  return (
    <div className="p-5 pb-1.5 flex flex-col gap-4 h-dvh overflow-y-hidden">
      <main className="sm:grid min-h-0 sm:grid-cols-[1fr_3fr] wide:grid-cols-[1fr_3fr_1fr]  gap-6 overflow-y-hidden">
        <LeftSideBar />
        <Feed />
        <RightSideBar />
      </main>
      <BottomNav />
    </div>
  );
};

const Feed = () => {
  return (
    <div className="flex flex-col min-h-0 h-full gap-4 overflow-y-scroll custom-scroll">
      {mockPostData.map((data, ind) => (
        <PostCard key={ind} {...data} />
      ))}
      <p className="text-sm hidden sm:block text-slate-500 text-center">
        You reached the end ⚡
      </p>
    </div>
  );
};

const PostCard = ({
  imgSrc,
  username,
  createdAt,
  location,
  postContent,
  postImage,
}) => {
  return (
    <div className="flex flex-col text-slate-400 p-2 bg-slate-900 border border-slate-700 rounded-2xl gap-4">
      <PostCardHeader
        imgSrc={imgSrc}
        username={username}
        createdAt={createdAt}
        location={location}
      />
      <PostContent postContent={postContent} postImage={postImage} />
      <PostActions />
    </div>
  );
};

const PostCardHeader = ({ imgSrc, username, createdAt, location }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex gap-3 items-center">
        <img
          src={imgSrc}
          alt="profile-picture"
          className="h-8 w-8 rounded-full"
        />
        <div>
          <p className="text-xl bold text-white">{username}</p>
          <div className="space-x-1.5 text-sm text-slate-500">
            <span>{createdAt}</span>
            <span>{location || "Earth"}</span>
          </div>
        </div>
      </div>
      <div>
        <FaEllipsisH />
      </div>
    </div>
  );
};

const PostContent = ({ postContent, postImage }) => {
  return (
    <div className="flex flex-col p-4 pb-0 gap-3 rounded-xl overflow-hidden">
      <p className="text-slate-300 text-lg">{postContent}</p>
      {postImage && (
        <img
          src={postImage}
          alt="user post image"
          className="h-32 object-cover object-center rounded-3xl "
        />
      )}
    </div>
  );
};

const PostActions = () => {
  return (
    <div className="flex justify-between gap-5 p-4 items-center text-xl bold ">
      <div className="flex gap-6 items-center">
        <FiHeart className="hover:fill-yellow-300 hover:text-yellow-300 hover:tranform-color duration-300" />
        <FaRegComment />
        <FaShare />
      </div>
      <FaRegBookmark />
    </div>
  );
};

const BottomNav = () => {
  return (
    <div className="sm:hidden flex shrink-0 gap-3 text-3xl p-3 items-center justify-between bg-slate-900 text-white rounded-2xl ">
      <div className="flex flex-col gap-2 text-center justify-center items-center">
        <GoHomeFill />
        <span className="text-lg">Home</span>
      </div>
      {/* <div className="flex flex-col gap-2 text-center justify-center items-center">
        <MdOutlineExplore />
        <span className="text-lg">Explore</span>
      </div> */}
      <div className="flex flex-col gap-2 text-center justify-center items-center">
        <BsPatchPlus />
        <span className="text-lg">Post</span>
      </div>
      <div className="flex flex-col gap-2 text-center justify-center items-center">
        <FaRegComment />
        <span className="text-lg">Messages</span>
      </div>
      <div className="flex flex-col gap-2 text-center justify-center items-center">
        <FaRegUser />
        <span className="text-lg">Profile</span>
      </div>
    </div>
  );
};

const LeftSideBar = () => {
  return (
    <div className="hidden sm:flex sm:flex-col sm:justify-between p-5 overflow-y-hidden top-6 text-white  bg-gray-900 ">
      <div className="flex flex-col gap-3 text-lg text-slate-300">
        <div className="flex gap-2  items-center border border-transparent hover:text-yellow-300  hover:border-b-yellow-300 transition-all duration-300 p-3">
          <GoHomeFill />
          <span className="text-lg">Home</span>
        </div>
        <div className="flex gap-2  items-center border border-transparent hover:text-yellow-300 hover:border-b-yellow-300 transition-all duration-300 p-3">
          <MdOutlineExplore />
          <span className="text-lg">Explore</span>
        </div>
        <div className="flex gap-2  items-center border border-transparent hover:text-yellow-300 hover:border-b-yellow-300 transition-color duration-300 p-3">
          <BsPatchPlus />
          <span className="text-lg">Post</span>
        </div>
        <div className="flex gap-2  items-center border border-transparent hover:text-yellow-300  hover:border-b-yellow-300 transition-all duration-300 p-3">
          <FaRegComment />
          <span className="text-lg">Messages</span>
        </div>
        <div className="flex gap-2  items-center border border-transparent hover:text-yellow-300 hover:border-b-yellow-300 transition-all duration-300 p-3">
          <FaRegUser />
          <span className="text-lg">Profile</span>
        </div>
        <div className="flex gap-2  items-center border border-transparent hover:text-yellow-300 hover:border-b-yellow-300 transition-all duration-300 p-3">
          <IoSettingsOutline />
          <span className="text-lg">Settings</span>
        </div>
      </div>

      <div className="flex gap-3 bg-yellow-400 p-3 justify-center items-center text-lg text-gray-500 rounded-2xl hover:text-yellow-400 hover:bg-slate-800 transition-colors duration-300">
        <BsPatchPlus />
        <span>Create post</span>
      </div>
    </div>
  );
};

const RightSideBar = () => {
  return (
    <div className="flex flex-col gap-4">
      <Profile {...mockProfileData} />
      <Recommend/>
    </div>
  );
};

const Profile = ({
  username,
  bio,
  postsCount,
  followersCount,
  followingCount,
  imgSrc,
}) => {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-white wide:flex wide:flex-col gap-5 hidden hover:bg-black hover:text-slate-400 transition-colors duration-300">
      <div className="flex gap-4">
        <img
          src={imgSrc}
          alt="profile-picture"
          className="h-10 w-10 rounded-full border-slate-700"
        />
        <div className="flex flex-col justify-center">
          <p className="text-gray-200 text-xl bold">{username}</p>
          <span className="text-sm text-gray-500">@{username}</span>
        </div>
      </div>
      <p className="text-wrap text-sm">{bio}</p>
      <div className="flex gap-5 justify-between">
        <StatsDiv count={postsCount} name={'Posts'}/>  
        <StatsDiv count={followersCount} name={'Followers'}/>  
        <StatsDiv count={followingCount} name={'Following'}/>  
      </div>
    </div>
  );
};

const StatsDiv = ({count,name}) => {
  return (
    <div className="flex flex-col">
      <span>{count}</span>
      <span>{name}</span>
    </div>
  );
};


const Recommend = ()=>{
  return (
    <div className="wide:flex wide:flex-col gap-3 text-gray-300 border border-slate-800 rounded-2xl bg-slate-900 p-4 hidden">
      <h2 className="text-xl bold">Who to follow</h2>
     {mockFollowList.map((data,ind)=>(
        <div className="flex justify-between items-center gap-4 p-2 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex gap-4">
          <img src={data.imgSrc} alt="user profile picture" className="h-10 w-10 rounded=full" />
          <div className="flex flex-col  items-center justify-center">
              <span>{data.username}</span>
              <span className="text-sm text-slate-500">@{data.username}</span>
          </div>
          </div>
          <button className="bg-yellow-300 rounded-2xl px-4 py-2 text-sm text-slate-500">Follow</button>
        </div>
     ))}
    </div>
  )
}