import { Bell, House, MessageCircleMore, Plus } from "lucide-react"
import "./Leftbar.css"

function Leftbar() {
    return (
        <div className="leftbar">
            <a href="/">
            <img src="/general/logo.png" alt="" />
            
            </a>
            <House />
            <Plus />
            <Bell />
            <MessageCircleMore />
        </div>
    )
}

export default Leftbar