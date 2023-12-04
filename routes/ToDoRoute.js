const { Router } = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");
const router = Router();

router.get('/', getToDo);
router.post('/save', saveToDo);
router.post('/update', updateToDo); 
router.post('/delete', deleteToDo); 

// Export the router to be used in other parts of your application
module.exports = router;
