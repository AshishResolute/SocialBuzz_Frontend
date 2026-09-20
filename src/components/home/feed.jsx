import { FaEllipsisH } from "react-icons/fa";
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

const PostCard = ({imgSrc,username,createdAt,location}) => {
    
  return (
    <div className="flex flex-col text-slate-400 h-72 bg-slate-800">
      <PostCardHeader imgSrc={imgSrc} username={username} createdAt={createdAt} location={location}/>
    </div>
  );
};

const PostCardHeader = ({imgSrc, username,createdAt,location }) => {
    console.log(imgSrc,username)
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex gap-3 items-center">
        <img
          src={imgSrc}
          alt="profile-picture"
          className="h-6 w-6 rounded-full"
        />
         <div>
        <p className="text-xl bold">{username}</p>
        <div>
          <span>{createdAt}</span>
          <span>{location||"Earth"}</span>
        </div>
      </div>
      </div>
      <div><FaEllipsisH/></div>
    </div>
  );
};

