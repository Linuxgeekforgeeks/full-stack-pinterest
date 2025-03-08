import { ChevronDown, Search } from "lucide-react"
import "./Topbar.css"
import { useState } from "react"

function Topbar() {
    const [showUserData, setshowUserData] = useState(false)
  return (
    <div className="topbar">
        <div className="topbar-search">
            
        <Search/>
        <input type="text" placeholder="Search"/>
        </div>

        <div className="topbar-profile">
            <div className="topbar-profile-user">
                <img src="https://cdn.pixabay.com/photo/2023/01/24/13/23/viet-nam-7741017_640.jpg" height={200} width={200}alt="ProfileImage" />
            </div>
            <div className="chevron-div" onClick={()=>setshowUserData(!showUserData)}>

            <ChevronDown/>
            </div>
            {showUserData&& 
            
            <div className="user-data">

            </div>}
           
        </div>
    </div>
  )
}

export default Topbar