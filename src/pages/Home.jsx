import { NavBar } from "../components/home/navbar"
import socialBuzzAuth from '../assets/socialBuzzAuth.jpg'
import { MainContent } from "../components/home/feed"
export const Home = ()=>{
    return (
        <div className="text-black flex flex-col gap-4 bg-[#0B0F19] font-sora bg-center bg-cover  bg-no-repeat h-screen w-screen " >
            <NavBar/>
            <MainContent className="flex flex-1"/>
        </div>
    )
}