import { FaEllipsisH } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { mockPostData } from "../../util/mockData";
export const MainContent = () => {
  return (
    <div className="p-4">
      <main>
        <Feed />
      </main>
    </div>
  );
};

const Feed = () => {
  return (
    <div className="flex flex-col gap-4">
      {mockPostData.map((data,ind)=>(
        <PostCard key={ind} {...data}/>
      ))}
    </div>
  );
};

const PostCard = ({imgSrc,username,createdAt,location,postContent,postImage}) => {
    
  return (
    <div className="flex flex-col text-slate-400  bg-slate-800 rounded-2xl gap-4">
      <PostCardHeader imgSrc={imgSrc} username={username} createdAt={createdAt} location={location}/>
      <PostContent postContent={postContent} postImage={postImage}/>
      <PostActions/>
    </div>
  );
};

const PostCardHeader = ({imgSrc, username,createdAt,location}) => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex gap-3 items-center">
        <img
          src={imgSrc}
          alt="profile-picture"
          className="h-6 w-6 rounded-full"
        />
         <div>
        <p className="text-xl bold text-white">{username}</p>
        <div className="space-x-1.5">
          <span>{createdAt}</span>
          <span>{location||"Earth"}</span>
        </div>
      </div>
      </div>
      <div><FaEllipsisH/></div>
    </div>
  );
};


const PostContent = ({postContent,postImage})=>{
    return (
        <div className="flex flex-col">
            <p className="text-slate-300 text-lg">{postContent}</p>
            <img src={postImage} alt="user post image" className="h-32 object-cover object-center"/>
        </div>
    )
}

const PostActions = ()=>{
    return (
        <div className="flex justify-between gap-5 p-2 items-center">
            <div className="flex gap-5 items-center">
                <IoMdHeartEmpty/>
                <FaRegComment/>
                <FaShare/>
            </div>
            <FaRegBookmark/>
        </div>
    )
}