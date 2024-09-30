import { useReducer, useRef } from "react"
import { addJob, removeJob, setJob } from "./action"
import reducer, { initState } from "./reducer"
import { Button, TextField } from "@mui/material"

export default function Todo() {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state
    const inputREF = useRef()
    const handleSubmit = () => {
        if (!job.trim()) { dispatch(setJob('')); return }
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputREF.current.focus()
    }
    return (
        <div className="container">
            <div className="box" style={{ marginTop: '20px' }}>
                <TextField size="small" placeholder="Nhập tên job" fullWidth ref={inputREF} value={job} onChange={(e) => dispatch(setJob(e.target.value))} />
                <Button sx={{ marginTop: '10px' }} variant="contained" onClick={handleSubmit}>Submit</Button>
                <ul>
                    {jobs.map((val, indx) => (
                        <li key={indx}>{val} <button onClick={() => dispatch(removeJob(indx))}>x</button></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}