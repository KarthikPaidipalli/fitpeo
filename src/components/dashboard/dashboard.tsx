// components/dashboard/dashboard.jsx
export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="calendar-section">
                <h2>October 2021</h2>
                <table className="calendar">
                    <thead>
                        <tr>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thurs</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                        </tr>
                        <tr>
                            <td>10:00</td>
                            <td>08:00</td>
                            <td>12:00</td>
                            <td>10:00</td>
                            <td>—</td>
                            <td>14:00</td>
                            <td>09:00</td>
                        </tr>
                        <tr>
                            <td>11:00</td>
                            <td>09:00</td>
                            <td>—</td>
                            <td>15:00</td>
                            <td>14:00</td>
                            <td>14:00</td>
                            <td>10:00</td>
                        </tr>
                        <tr>
                            <td>12:00</td>
                            <td>10:00</td>
                            <td>13:00</td>
                            <td>—</td>
                            <td>16:00</td>
                            <td>15:00</td>
                            <td>11:00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="appointments-section">
                <div className="appointment-card">
                    <h3>Dentist</h3>
                    <p>09:00-11:00</p>
                    <p>Dr. Cameron Williamson</p>
                </div>
                
                <div className="appointment-card">
                    <h3>Physiotherapy Appointment</h3>
                    <p>11:00-12:00</p>
                    <p>Dr. Kevin Djones</p>
                </div>
            </div>
            
            <div className="upcoming-section">
                <h2>The Upcoming Schedule</h2>
                
                <div className="schedule-day">
                    <h3>On Thursday</h3>
                    <div className="schedule-item">
                        <p><strong>Health checkup complete</strong></p>
                        <p><strong>11:00 AM</strong></p>
                    </div>
                    <div className="schedule-item">
                        <p><strong>Ophthalmologist</strong></p>
                        <p><strong>14:00 PM</strong></p>
                    </div>
                </div>
                
                <div className="schedule-day">
                    <h3>On Saturday</h3>
                    <div className="schedule-item">
                        <p><strong>Cardiologist</strong></p>
                        <p><strong>12:00 AM</strong></p>
                    </div>
                    <div className="schedule-item">
                        <p><strong>Neurologist</strong></p>
                        <p><strong>16:00 PM</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}