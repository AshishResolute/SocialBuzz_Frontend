import { NavBar } from "../components/home/navbar"
import socialBuzzAuth from '../assets/socialBuzzAuth.jpg'
export const Home = ()=>{
    return (
        <div className="text-black font-sora bg-center bg-cover overflow-auto bg-no-repeat h-screen w-screen" style={{backgroundImage:`url(${socialBuzzAuth})`}}>
            <NavBar/>
        </div>
    )
}