// components/sidebar/sidebar.jsx
export default function Sidebar() {
    return (
        <div className="sidebar">
            <h1>Healthcare.</h1>
            
            <div className="sidebar-section">
                <h2>General</h2>
                <ul>
                    <li className="active">Dashboard</li>
                    <li>History</li>
                    <li>Calendar</li>
                    <li>Appointments</li>
                    <li>Statistics</li>
                </ul>
            </div>
            
            <div className="sidebar-section">
                <h2>Tools</h2>
                <ul>
                    <li>Chat</li>
                    <li>Support</li>
                </ul>
            </div>
            
            <div className="sidebar-section">
                <h2>Healthcard</h2>
                <h3>Healthy Heart</h3>
                <ul>
                    <li>Healthy Log</li>
                    <li>Bone</li>
                    <li>Birth: 26 Oct. 2021</li>
                    <li>Death: +</li>
                </ul>
                <p>3 appointment on this week</p>
            </div>
        </div>
    );
}