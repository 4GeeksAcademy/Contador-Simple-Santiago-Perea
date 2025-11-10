export default function SecondsCounter(props) { 
    return (
    <div className="counter">
      <div className="calendar"><i className="fa-regular fa-clock"></i></div>
      <div className="days">{Math.floor(props.seconds / 86400)} :</div>
      <div className="hours">{Math.floor((props.seconds % 86400) / 3600)} :</div>
      <div className="minutes">{Math.floor((props.seconds % 3600) / 60)} :</div>
      <div className="seconds">{Math.floor(props.seconds % 60)}</div>
    </div>
    )
}