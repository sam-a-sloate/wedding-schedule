import './Schedule.css';

type WeddingEvent = {
  time: string;
  description: string;
};

type ScheduleProps = {
  events: WeddingEvent[];
};

const Schedule = ({ events }: ScheduleProps) => {
  return <>
    <div className="title">Order of Events</div>
    <div className="wedding_info">
        <span>Jenny & Sam</span>
        <div style={{borderLeft: "2px solid black", marginRight: "4px", marginLeft: "4px"}}></div>
        <span>March 31st, 2021</span>
    </div>

    {events.map((e) => (
      <div className="event">
        <span className="time">{e.time}</span>
        <span className="description">{e.description}</span>
      </div>
    ))}
  </>;
};

export default Schedule;
