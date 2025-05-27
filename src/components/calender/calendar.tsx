import { dates, appointments } from "../../data/data";
import { Card } from "../global/card";
import "./calendar.css";

export default function CalendarView (){
  const scheduleByDay = (day: string) =>{
    return appointments.filter((a) => a.day === day && !a.full);
  }
  return (
    <div className="calendar-container">
      <h3 className="calendar-title">May 2025</h3>

      <div className="calendar-grid">
        {dates.map((day) => (
          <div key={day.id} className={`calendar-day`}>
            <div className="day-label">{day.day}</div>
            <div className="date-label">{day.date}</div>
            <div className="time-slots">
              {day.time.map((slot) => (
                <div key={slot.id} className={`time-slot ${slot.active ? "active" : ""}`}>
                  {slot.time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid-two">
        {appointments.filter((a) => a.full).map((obj, index) => (
          <Card key={index} {...obj} />
        ))}
      </div>

      <h3 className="schedule-title">The Upcoming Schedule</h3>

      <div className="mb-6">
        <h4 className="schedule-subtitle">On Thursday</h4>
        <div className="grid-two">
          {scheduleByDay("Thursday").map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>

      <div>
        <h4 className="schedule-subtitle">On Saturday</h4>
        <div className="grid-two">
          {scheduleByDay("Saturday").map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
