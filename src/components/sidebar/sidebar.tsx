import "./sidebar.css";
import { FaTachometerAlt, FaHistory, FaCalendarAlt, FaClipboardList, FaChartPie, FaComments, FaPhone, FaCog } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <h2 className="section-title">General</h2>
                <ul>
                    <li className="active"><FaTachometerAlt /> <span>Dashboard</span></li>
                    <li><FaHistory /> <span>History</span></li>
                    <li><FaCalendarAlt /> <span>Calendar</span></li>
                    <li><FaClipboardList /> <span>Appointments</span></li>
                    <li><FaChartPie /> <span>Statistics</span></li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h2 className="section-title">Tools</h2>
                <ul>
                    <li><FaComments /> <span>Chat</span></li>
                    <li><FaPhone /> <span>Support</span></li>
                </ul>
            </div>

            <div className="sidebar-setting">
                <FaCog /> <span>Setting</span>
            </div>
        </div>
    );
}
