let teacher = {
firstname:"Pooja",
lastname:"Patel",
degrees:{
  engineering:"CSC",
  PHD:"Adv Computing",
  MCA:"Artifical Intelligence"
},
certificates:{
  Certifiate1:"Linux Certification",
  Certificate2:".Net Full Stack Developer Certification"
}
}

console.log(`Full Name is:${teacher.firstname} ${teacher.lastname}`);
console.log("Teacher Degree's : ",teacher.degrees);
console.log("Teacher Cerficate's : ",teacher.certificates);

let degreeVal=Object.values(teacher.degrees).join(" ");
let cerificateVal=Object.values(teacher.certificates).join( " ");

console.log(`Teacher Degrees and Certificates are : ${degreeVal} ${cerificateVal}`);