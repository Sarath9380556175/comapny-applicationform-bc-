const express=require('express');

const router=express.Router();
const jobcontroller=require('../controllers/jobseekers')

router.post('/jobseekers', jobcontroller.getjobseekersdetails)
router.post('/uploadresume', jobcontroller.getresume)


module.exports=router;