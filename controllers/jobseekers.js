const jobseekers=require('../models/jobsearchers')
var nodemailer = require('nodemailer');
const resumes=require('../models/resumes')


exports.getjobseekersdetails=(req,res)=>{
  
const request=req.body;

const usn=request.usn;
const name=request.name;
const gender=request.gender;
const email=request.email;
const alternateemail=request.alternateemail;
const mobilenumber=request.mobilenumber;
const dateofbirth=request.dateofbirth;
const course=request.course;
const YOP=request.YOP;
const UGMarks=request.UGMarks;
const diploma=request.diploma;
const diplomabranch=request.diplomabranch;
const diplomapercentage=request.diplomapercentage;
const twelvethpercentage=request.twelvethpercentage;
const tenthpercentage=request.tenthpercentage;
const nameofthecollege=request.nameofthecollege;
const city=request.city;
const state=request.state;
const universityname=request.universityname;
const resume=request.resume;
console.log(resume)



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sarathbunny75',
    pass: 'Sarath@9550'
  }
});

var mailOptions = {
  from: 'sarathbunny75@gmail.com',
  to: email,
  subject: 'Thank You for your submission!',
  html: `<p style={color:'orangered'}>Hello ${name}.Thank you for sending your CV and for your interest in Sarath Solutions.If you aren’t contacted by a recruitment specialist within two weeks from the date of submission, it means we don’t have any suitable vacanciesfor your skills and experience at this time. Your CV will be stored in our database, which will allow our recruitment specialists to contact you and offer suitable vacancies if such positions appear.You can always find a full list of open positions across all Sarath Solutions locations on our web-site.If you haven’t found a suitable vacancy, you can always send us your CV via our web-form.For any questions, please contact us via request form.
  Best regards,
  Sarath Solutions Recruitment Department<p>`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

const Jobseekers=new jobseekers({usn:usn,name:name,gender:gender,email:email,alternateemail:alternateemail,mobilenumber:mobilenumber,dateofbirth:dateofbirth,
course:course,YOP:YOP,UGMarks:UGMarks,diploma:diploma,diplomabranch:diplomabranch,diplomapercentage:diplomapercentage,twelvethpercentage:twelvethpercentage,
tenthpercentage:tenthpercentage,nameofthecollege:nameofthecollege,city:city,state:state,universityname:universityname,resume:resume})

Jobseekers.save()

.then(response=>res.status(200).json({message:'details stored successfully', Jobseekersdetails:response}))

.catch(error=>res.status(500).json({err:error}))

}

exports.getresume=(req,res)=>{
  const skr=req.body.resume;
  console.log(skr);
  const tkr=req.body.name;
  console.log(tkr)

const uploadresumes=new resumes({resume:skr,name:tkr})
uploadresumes.save()
.then(response=>res.status(200).json({message:'resume stored successfully', resumes:response}))

.catch(error=>res.status(500).json({err:error}))
}
