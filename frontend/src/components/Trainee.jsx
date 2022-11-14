import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import NewWorkoutPage from '../pages/NewWorkoutPage';
import NewMacroPage from '../pages/NewMacroPage';

function Trainee({setTrainee, trainee}) {
    const back2List =() => {
        setTrainee(null)
        localStorage.removeItem("trainee")
      }
    
 
  return (
    <> 
    <div className='trainee'>
        <div className='container'>
    <Link to="/" onClick={() => back2List()}>back to list</Link>
    <div>name:{trainee.name} <br/>
    age:{trainee.age} <br/>
    
    <Link to="/macro" >Add Macro set</Link><br/>
    <Link to="/workout" >Add Workout</Link>
    </div>
    </div>
    <Routes>
    <Route path="/macro" element= {<NewMacroPage trainee={trainee} setTrainee={setTrainee}/>} />
    <Route path="/workout" element={<NewWorkoutPage trainee={trainee} setTrainee={setTrainee}/>} />
    </Routes>
    {trainee.macros.map((macro, i) => {
                        return (
                            <li key={i}>
                            {/* each macro set */}
                            Macro Set<br/>
                            calories: {macro.calories}<br/>
                            protein: {macro.protein}<br/>
                            carbs: {macro.carbs}<br/>
                            fats: {macro.fats} <br/>
                            <form action= {`/api/macro/${macro._id}?_method=DELETE`} method="POST" >
                                <input type='submit' value='DELETE' ></input>
                            </form>
                        </li>

                        )
                    })}

   
    
    {trainee.workouts.map((workout, i) => {
                        return (
                            <li key={i}>
                            {/* each workout set */}
                            Workout<br/>
                            Bench: {workout.bench}<br/>
                            Incline Bench: {workout.inclineBench}<br/>
                            pecdec: {workout.pecdec}<br/>
                            revpecdec: {workout.revpecdec} <br/>
                            pushdowns: {workout.pushdowns} <br/>
                            latraise: {workout.latraise} <br/>
                            declinesitups: {workout.declinesitups} <br/>                           
                            <form action= {`/api/workout/${workout._id}?_method=DELETE`} method="POST" >
                                <input type='submit' value='DELETE' ></input>
                            </form>
                        </li>

                        )
                    })} 
    
    
    </div>
    
    
    </>
   
  )
}

export default Trainee