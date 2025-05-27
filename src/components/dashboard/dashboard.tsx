import './dashboard.css';
import { FaHeart, FaLungs, FaTooth, FaBone, FaRunning } from 'react-icons/fa';

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <span className="dashboard-period">This Week</span>
            </div>

            <div className="dashboard-content">
                <div className="dashboard-body">
                    <img
                        src="https://img.freepik.com/free-photo/human-body-frontal_1048-5345.jpg"
                        alt="Human Body"
                        className="body-image"
                    />
                    <div className="label heart"><FaHeart /> Healthy Heart</div>
                    <div className="label leg"><FaRunning /> Healthy Leg</div>
                </div>

                <div className="dashboard-stats">
                    <div className="stat-card lungs">
                        <img
                            src="https://img.freepik.com/free-photo/human-lungs-with-veins-bokeh-background-3d-illustration_1057-36599.jpg"
                            alt="Lungs"
                        />
                        <div className="stat-info">
                            <h3><FaLungs /> Lungs</h3>
                            <p>Date: 26 Oct 2021</p>
                            <div className="bar red"></div>
                        </div>
                    </div>

                    <div className="stat-card teeth">
                        <img
                            src="https://img.freepik.com/free-photo/dental-implants-surgery-concept-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-10421.jpg"
                            alt="Teeth"
                        />
                        <div className="stat-info">
                            <h3><FaTooth /> Teeth</h3>
                            <p>Date: 26 Oct 2021</p>
                            <div className="bar blue"></div>
                        </div>
                    </div>

                    <div className="stat-card bone">
                        <img
                            src="https://img.freepik.com/free-photo/3d-male-medical-figure-running-with-knee-bone-highlighted_1048-12528.jpg"
                            alt="Bone"
                        />
                        <div className="stat-info">
                            <h3><FaBone /> Bone</h3>
                            <p>Date: 26 Oct 2021</p>
                            <div className="bar orange"></div>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#" className="details-link">Details →</a>
            <img src="https://www.firstbeat.com/wp-content/uploads/2019/09/stress-recovery-balance-versus-physical-activity.png" alt="" height={230} width={500} />
        </div>
    );
}
