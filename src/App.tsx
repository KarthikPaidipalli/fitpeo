// App.js
import './App.css';
import CalendarView from './components/calender/calendar';
import Dashboard from './components/dashboard/dashboard';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';

function App() {
    return (
      <div>
      <Header/>
      <div className="app-container">
            <div style={{width:"20%"}}><Sidebar/></div>
            <div style={{width:"40%"}}><Dashboard/></div>
            <div style={{width:"40%"}}><CalendarView/></div>
        </div>
      </div>

    );
}

export default App;