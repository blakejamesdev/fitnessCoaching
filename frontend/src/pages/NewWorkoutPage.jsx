import React, {useState, useEffect} from 'react'
import axios from 'axios'

function NewWorkoutPage({trainee, setTrainee}) {
  const [owner, setOwner]= useState("")
  const [bench, setBench]= useState("")
  const [inclineBench, setInclineBench]= useState("")
  const [pecdec, setPecdec]= useState("")
  const [revpecdec, setRevpecdec]= useState("")
  const [pushdowns, setPushdowns]= useState("")
  const [latraise, setLatraise]= useState("")
  const [declinesitups, setDeclinesitups]= useState("")
  // const [refresh, setRefresh]= useState([])

  useEffect(()=>{
    setOwner(trainee._id)
   
  },[trainee._id])
  const handleOwnerChange =(e) => {
    setOwner(e.target.value);
  }
  const handleBenchChange =(e) => {
    setBench(e.target.value);
  }
  const handleInclineBenchChange=(e)=> {
    setInclineBench(e.target.value);
  }
  const handlePecdecChange=(e)=> {
    setPecdec(e.target.value);
  }
  const handleRevpecdecChange=(e)=> {
    setRevpecdec(e.target.value);
  }
  const handlePushdownsChange=(e)=>{
    setPushdowns(e.target.value);
  }
  const handleLatraiseChange=(e)=>{
    setLatraise(e.target.value);
  }
  const handleDeclinesitupsChange=(e)=>{
    setDeclinesitups(e.target.value);
  }
  const handleFormSubmission = async (e)=>{
    e.preventDefault();
    const state = {owner, bench, inclineBench, pecdec, revpecdec, pushdowns, latraise, declinesitups}
    try{
      const res = await axios({
        method:"POST",
        url:"/api/workout",
        data: state
      })
      console.log(res)
      localStorage.setItem("trainee", JSON.stringify(trainee))
      window.location.reload(false);
      setTrainee(JSON.parse(localStorage.getItem("trainee")))
      setTrainee(trainee)
    }catch(e){
      console.log(e)
    }
  }
  return (
    <div className='form'>Add Workout<br/>
       <form action="/api/workout"
        method="POST"
        onSubmit={(e)=>{
          return handleFormSubmission(e)
        }}
        >
           <span> Owner (Do not change!): <input type="text" name="owner" defaultValue={trainee._id}required
            onChange={(e) => {
              return handleOwnerChange(e)}}/></span>
            <br />
            Bench: <input type="text" name="bench" required
            onChange={(e) =>{
              return handleBenchChange(e)
            }}/>
            <br />
            Incline Bench: <input type="text" name="inclineBench" required  onChange={(e) =>{
              return handleInclineBenchChange(e)
            }}/>
            <br />
            Pecdec: <input type="text" name="pecdec" required  onChange={(e) =>{
              return handlePecdecChange(e)
            }}/>
            <br />
            Revpecdec: <input type="text" name="revpecdec" required  onChange={(e) =>{
              return handleRevpecdecChange(e)
            }}/>
            <br />
            Pushdowns: <input type="text" name="pushdowns" required  onChange={(e) =>{
              return handlePushdownsChange(e)
            }}/>
            <br />
            Latraise: <input type="text" name="latraise" required  onChange={(e) =>{
              return handleLatraiseChange(e)
            }}/>
            <br />
            Decline Situps: <input type="text" name="declinesitups" required  onChange={(e) =>{
              return handleDeclinesitupsChange(e)
            }}/>
            <br />
            <input type="submit" name="" value="Create New workout" />
          </form>
    </div>
  )
}

export default NewWorkoutPage