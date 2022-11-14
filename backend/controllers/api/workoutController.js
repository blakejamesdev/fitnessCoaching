const Workouts = require("./../../models/workoutsModel")

// Define a route handler for creating macros
exports.createWorkout =async (request, response) => {
    console.log(request)
    try{
        const newWorkout = await Workouts.create({
            owner: request.body.owner,
            bench: request.body.bench,
            inclineBench: request.body.inclineBench,
            pecdec: request.body.pecdec,
            revpecdec: request.body.revpecdec,
            pushdowns: request.body.pushdowns,
            latraise: request.body.latraise,
            declinesitups: request.body.declinesitups        
        });
   
     // Send JSON RESPONSE
     response.status(201).json({
        status: "success",
        data: newWorkout,
      });
      
      } catch (error) {
        console.log(error)
        response.status(500).json({
            status: "error",
            error: error,
          });
      }
}
// Define a route handler for deleting a workout
exports.deleteWorkout = async (request, response) => {
    try{
      Workouts.findByIdAndRemove(request.params.id, (err, data) => {
      
      })
    }catch (error){
      console.log(error)
    }
  }