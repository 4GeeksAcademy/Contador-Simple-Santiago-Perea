export default function SecondsCounter(props) { 
    const seconds = String(Math.floor(props.seconds % 60)).padStart(2, "0");
    const minutes = String(Math.floor((props.seconds % 3600) / 60)).padStart(2, "0");
    const hours = String(Math.floor((props.seconds % 86400) / 3600)).padStart(2, "0");
    const days = String(Math.floor(props.seconds / 86400)).padStart(2, "0");
    return (
    <div className="counter">
      <div className="calendar"><i className="fa-regular fa-clock"></i></div>
      <div className="days">{days} :</div>
      <div className="hours">{hours} :</div>
      <div className="minutes">{minutes} :</div>
      <div className="seconds">{seconds}</div>
    </div>
    )
}