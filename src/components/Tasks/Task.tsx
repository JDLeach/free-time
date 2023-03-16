import './Task.css';
function Task(){
    return(
        <div className="task">
            <button>Checkbox</button>
            <div className="task-time">1m</div>
            <div className="task-name">Clean the bathroom</div>
        </div>
    )
}
export default Task;