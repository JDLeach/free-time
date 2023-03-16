import './Timer.css';
function Timer(){
    return (
        <div id='timerContainer'>
            <input type="number" name="minutes" id="minutes" placeholder="00" min={1} max={99} />
            <select name="minuteOrHour" id="minuteOrHour">
                <option value="minute">Minutes</option>
                <option value="hour">Hours</option>
            </select>
        </div>
    )
}
export default Timer;