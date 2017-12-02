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
    
    pdfMake.fonts = {
        OpenSans: {
            normal: "OpenSans.ttf",
            bold: "OpenSans.ttf"
        },
        Roboto: {
            normal: "Roboto-Regular.ttf",
            bold: "Roboto-Medium.ttf"
        }
    }
    
    // We create the object that will store what we want to print
    // Once created we will first pass the user info
    var docDefinition = {
        background: function () {
            return {
                canvas: [
                    {
                        type: 'rect',
                        x: 0, y: 0, w: 215, h: 841,                        
                        color: '#d1ddd1'
                    }
                ]
            };
        },
        content: [
            {
                canvas: [
                    {
                        type: 'rect',
                        x: -40, y: -40, w: 595.28, h: 156,
                        color: '#33342f',
                        pageBreak: 'before',
                    },
                ]
            },
            {
                text: (user.user_name || "Name") + " " + (user.user_last_name || "Last Name"),
                fontSize: 45,
                color: '#ffffff',
                font: 'OpenSans',
                alignment: 'center',
                margin: [ 0, -115, 0, 75],
            },
            {
                style: 'tableExample',
                margin: [-40, 0, 0, 0],
                table: {
                    widths: [190, 350],
                    body: [
                        [{
                            style: 'right',
                            table: {
                                widths: ['*'],
                                body: [
                                ]
                            },
                            layout: 'noBorders'
                            
                        },
                        {
                            table: {
                                widths: ['*'],
                                body: [
                                ]
                            },
                            layout: 'noBorders'
                            
                        }]
                    ]
                },
                layout: 'noBorders'
                
            },
        ],
        styles: {
            right: {
                alignment: 'right'
            }
        }                
    }
    console.log(docDefinition);
    var eduColumn = ()=>{
        if(education.length===0) {
            docDefinition.content[2].table.body[0][0].table.body.push(
                [{text: 'Degree', style: 'tableHeader',bold: true,  alignment: 'right'}],
                [{text: 'University'}],
                ['Year - Year']
            )         
        }else{
            education.map((school)=>{
                docDefinition.content[2].table.body[0][0].table.body.push(
                    [{text: school.degree || "Degree or Certificate", style: 'tableHeader',bold: true}],
                    [{text: (school.school_name || "Institution")} ],
                    [school.year || "Year - Year"]
                )
            })
        }
    }

    eduColumn()

    var workColumn = ()=>{
        if(work_exp.length===0) {
            docDefinition.content[2].table.body[0][1].table.body.push(
                [{text: 'Job Title', style: 'tableHeader',bold: true, margin: [40, 0, 0, 0] }],
                [{text:'Company', margin: [40, 0, 0, 0]}],
                [{text:'Year - Year', margin: [40, 0, 0, 0]}],
                [{text:"Describe your job responsibilities, accomplishments and technologies you have used. It's highly recommended that you use bullet points to describe your experience." , margin: [40, 0, 0, 0]}]            
            )         
        }else{
            work_exp.map((job)=>{
                docDefinition.content[2].table.body[0][1].table.body.push(
                    [{text: job.job_title || "Degree or Certificate", style: 'tableHeader',bold: true, margin: [40, 0, 0, 0]}],
                    [{text: (job.job_company || "Institution"), margin: [40, 0, 0, 0] }],
                    [{text:job.job_dates || "Year - Year", margin: [40, 0, 0, 0]}],
                    [{text: job.job_description || "Describe your job responsibilities, accomplishments and technologies you have used. It's highly recommended that you use bullet points to describe your experience.", margin: [40, 0, 0, 15]}]
                )
            })
        }
    }

    workColumn()
    
    pdfMake.createPdf(docDefinition).download((user.user_last_name||"LastName") + "_" +(user.user_name||"Name") + ".pdf");    
}