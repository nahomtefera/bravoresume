import pdfMake from 'pdfmake/build/pdfmake';
import vfsFonts from 'pdfmake/build/vfs_fonts';
import * as icons from './images/base64/icons_b64.js';

export default (items) => {

    const {vfs} = vfsFonts.pdfMake;
    pdfMake.vfs = vfs;
    var user, work_exp, education;

    user = items.user_info;
    work_exp = items.work_experience;
    education = items.education;
    
    // We create the object that will store what we want to print
    // Once created we will first pass the user info
    var docDefinition = {
        pageMargins: [ 40, 40, 100, 60 ],
        content: [
            // First we print the user info
            {
                text: user.user_name + " " + user.user_last_name,
                fontSize: 32,
                color: '#3873b3',
                absolutePosition: {x: 38, y: 25}
            },
            {
              image: icons.email_icon,
              width: 8,
              absolutePosition: {x: 58, y: 68}
            },
            {
              text: user.user_home_address, 
              fontSize: 10, color: '#333',
              absolutePosition: {x: 72, y: 66}
            },
            {
              image: icons.phone_icon,
               width: 8,
               absolutePosition: {x: 58, y: 85}
            },
            {
              text: user.user_phone_number,
              fontSize: 10, color: '#333',
              absolutePosition: {x: 72, y: 83}
            },
            {
              image:  icons.email_icon,
               width: 8,
               absolutePosition: {x: 145, y: 85}
            },
            {
              text: user.user_email_address,
              fontSize: 10, color: '#333',
              absolutePosition: {x: 159, y: 83}
            },
        ]
    }
    // We will print the title Work Experience
    // and a horizontal bar
    docDefinition.content = docDefinition.content.concat([
        {
            text: " ", fontSize: 75, color: '#3873b3'
          },
          {
            text: "Work Experience",
            fontSize: 14,
            color: '#3873b3',
          },
          { canvas: [{ type: 'line', x1: 0, y1:1, x2: 460, y2:1, lineWidth: 2, color:"#3873b3" } ] },
    ])

    // Now we are going to iterate the jobs
    // And print them
    work_exp.map((job)=> {
        docDefinition.content = docDefinition.content.concat([
              //We have to print all the Jobs that we have
              //First we print the first Job
              {
                text: job.job_title,
                fontSize: 11,
                bold: true,
                color: '#333',
                margin: [ 10, 8, 0, 0]
              },
              {
                text: job.job_date,
                fontSize: 11,
                alignment: "right",
                color: '#333',
                margin: [ 10, -11, 0, 0]
              },
              {
                text: job.job_company + "  " + job.job_location,
                fontSize: 11,
                color: '#333',
                margin: [ 10, -1, 0, 2 ]
              },
              {
                text: job.job_description,
                fontSize: 11,
                color: '#333',
                alignment: "justify",
                margin: [ 10, -1, 0, 2 ]
                }
        ]);
    })
    
    // We will print the title Education
    // and a horizontal bar

    docDefinition.content= docDefinition.content.concat([
      {text: " "},
      {
        text: "Education",
        fontSize: 14,
        color: '#3873b3',
      },
      { canvas: [{ type: 'line', x1: 0, y1:1, x2: 460, y2:1, lineWidth: 2, color:"#3873b3" } ] },
      {
        text: "Academic Qualifications. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ",
        fontSize: 11,
        color: '#3873b3',
        alignment: "justify",
        margin: [ 0, 5, 0, 2 ]
      }
    ])

    // Now we are going to iterate through schools
    // And print them
    education.map((school)=>{
      docDefinition.content = docDefinition.content.concat([
        {
          text: school.degree,
          fontSize: 11,
          bold: true,
          color: '#333',
          margin: [ 10, 0, 0, 0]
        },
        {
          text: school.year,
          fontSize: 11,
          alignment: "right",
          color: '#333',
          margin: [ 10, -11, 0, 0]
        },
        {
          text: school.school_name + "  " + school.school_location,
          fontSize: 11,
          color: '#333',
          margin: [ 10, -1, 0, 2 ]
        }
      ])
    })

    // console.log(user)
    // console.log(work_exp)
    pdfMake.createPdf(docDefinition).download(user.user_name + user.user_last_name + ".pdf");    
}