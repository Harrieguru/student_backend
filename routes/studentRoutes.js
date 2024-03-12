const {Router} = require('express');
const router = Router();
const Student = require('../models/students');


// routes
router.get('/',async(req,res) => {
    try{
        const students = await Student.find();
        res.json(students);
    } catch(error) {
        console.error(error);
        res.status(500).json({message: 'Failed to retrieve students'});
    }
})

// retrieve a single student
router.get('/:id',async(req,res) => {
    try{
        const student = await Student.findById(req.params.id);
        res.json(student);
    } catch(error) {
        console.error(error);
        res.status(500).json({message:'Failed to retrieve student'})
    }
})


// create a student
// create a student
router.post('/', async (req, res) => {
    try {
        const { studentNumber, firstName, lastName, address, city, phoneNumber, email, program } = req.body;
        
        const newStudent = new Student({
            studentNumber,
            firstName,
            lastName,
            address,
            city,
            phoneNumber,
            email,
            program
        });

        await newStudent.save();
        res.json(newStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create a new student' });
    }
});



// update student data
router.put('/:id',async(req,res) => {
    try{
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            {
                studentNumber:req.body.studentNumber,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                address:req.body.address,
                city:req.body.city,
                phoneNumber:req.body.phoneNumber,
                email:req.body.email,
                program:req.body.program
            },
            {new:true}
        )
        res.json(updatedStudent);
    } catch(error) {
        console.error(error);
        res.status(500).json({message:'Failed to update student'})
    }
})


// delete student data
router.delete('/:id',async(req,res) => {
    try{
        await Student.findByIdAndDelete(req.params.id);
        res.json({message:'student deleted successfully'})
    } catch(error) {
        console.error(error)
        res.status(500).json({message:'error deleting student'})
    }
})


module.exports = router;

