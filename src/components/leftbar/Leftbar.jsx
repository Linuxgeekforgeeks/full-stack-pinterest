import { Bell, House, MessageCircleMore, Plus } from "lucide-react"
import "./Leftbar.css"

function Leftbar() {
    return (
        <div className="leftbar">
            <div className="logo">P</div>
            <House />
            <Plus />
            <Bell />
            <MessageCircleMore />
        </div>
    )
}

export default Leftbar