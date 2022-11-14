import React from 'react'


function List({list, setTrainee} ) {
    //console.log(list)
    // const traineeDetail = () =>{
    //     setTrainee(this.client)
    //     console.log(Trainee)
    //}
    
    let listData = list.map((client, i) => ( 
        <li key={i}>
            {client.name}<br/>
            <button onClick={() => setTrainee(client)}>Trainee info</button>
            <form action= {`/api/users/${client._id}?_method=DELETE`} method="POST">
                    <input type='submit' value='DELETE'></input>
            </form>
        </li>
    ))
  
  return (
    <div className='list'>{listData}</div>
  )
}

export default List