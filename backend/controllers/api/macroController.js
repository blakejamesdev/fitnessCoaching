const Macros = require("./../../models/macrosModel")

// Define a route handler for creating macros
exports.createMacro =async (request, response) => {
    console.log(request)
    try{
        const newMacro = await Macros.create({
            owner: request.body.owner,
            calories: request.body.calories,
            protein: request.body.protein,
            carbs: request.body.carbs,
            fats: request.body.fats
        });
   
     // Send JSON RESPONSE
     response.status(201).json({
        status: "success",
        data: newMacro,
      });
      
      } catch (error) {
        console.log(error)
        response.status(500).json({
            status: "error",
            error: error,
          });
      }
}
// Define a route handler for deleting a macro
exports.deleteMacro = async (request, response) => {
    try{
      Macros.findByIdAndRemove(request.params.id, (err, data) => {
      
      
      })
    }catch (error){
      console.log(error)
    }
  }