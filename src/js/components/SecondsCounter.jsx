export default function SecondsCounter(props) { 
    //const seconds = Math.floor(props.seconds % 60);
    return (
    <div className="counter">
      <div className="calendar"><i className="fa-regular fa-clock"></i></div>
      <div className="days">{String(Math.floor(props.seconds / 86400)).padStart(2, "0")} :</div>
      <div className="hours">{String(Math.floor((props.seconds % 86400) / 3600)).padStart(2, "0")} :</div>
      <div className="minutes">{String(Math.floor((props.seconds % 3600) / 60)).padStart(2,"0")} :</div>
      <div className="seconds">{String(Math.floor(props.seconds % 60)).padStart(2,"0")}</div>
    </div>
    )
}