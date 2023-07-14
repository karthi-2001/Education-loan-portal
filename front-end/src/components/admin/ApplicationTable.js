import React,{useState} from 'react'
import {Document, Page, Text, View, Image, StyleSheet, PDFViewer} from '@react-pdf/renderer';
import pan from "./pan";

const styles=StyleSheet.create({
    page:{
      flexDirection:'column',
      padding:'40px',
      height:'100%',
      alignItems:'stretch',
      justifyContent:'flex-start'
    },
    section:{
      marginBottom:10,
    },
    image:{
      width:200,
      height:200,
      marginBottom:10,
    },
  });

export default function ApplicationTable({application}) {
    const [showPdf,setShowPdf]=useState(false);
    const [pdf,setPdf]=useState(null);
    
    
    const handleGenerateReport=()=>{
      const generatePdf = (
        <Document style={{height:'100%'}}>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Name: {application.firstname}</Text>
              <Text>Email: {application.lastname}</Text>
              <Text>Image:</Text>
              <Image src={`data:image/jpeg;base64,${pan}`} />
            </View>
          </Page>
        </Document>
      );
      setPdf(generatePdf);
      setShowPdf(true);
    }
  return (
    <>
        <tr>
            <th scope="row">{application.id}</th>
                <td>{application.firstname}</td>
                <td>{application.lastname}</td>
                <td>{application.adharNumber}</td>
                <td>{application.panNumber}</td>
                <td>{application.loanAmount}</td>
                <td>
                  <button onClick={handleGenerateReport} className="btn btn-primary mx-4">Report</button>
                </td>
                <td>
                  <button type="button" className="btn btn-success mx-4">
                    Accept
                  </button>
                  <button type="button" className="btn btn-danger mx-4">
                    Reject
                  </button>
                </td>               
            </tr> 
        {
          showPdf && 
          <div className='pdf-container'>
            <div className='pdf-content'>
            <div className='pdf-modal' style={{width:'100%',height:'100%'}}>
              <div className='pdf-content' style={{width:'100%',height:'100%'}}>
                <PDFViewer style={{width:'100%',height:'98%'}}>{pdf}</PDFViewer>
                <button className="pdf-close-btn btn btn-danger" style={{float:'right'}} onClick={()=>setShowPdf(false)}>
                  Close PDF
                </button>
              </div>
            </div>
            </div>
            </div>
        }
    </>
  )
}
