// App.js
import './App.css';
import CalendarView from './components/calender/calendar';
import Dashboard from './components/dashboard/dashboard';
import Sidebar from './components/sidebar/sidebar';

function App() {
    return (
        <div className="app-container">
            <Sidebar/>
            <Dashboard/>
            <CalendarView/>
        </div>
    );
}

export default App;