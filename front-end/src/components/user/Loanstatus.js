import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
const Loanstatus = () => {
  const LoanStatus = [
    {
      name: "Priyanshu",
      loanId: 1,
      status: "Rejected",
    },
    {
      name: "Priyanshu",
      loanId: 2,
      status: "Approved",
    },
  ];

  <></>;
  return (
    <Container style={{ paddingLeft: "10px", paddingTop: "30px" }}>
      <h2 style={{ color: "black", padding: 20, textAlign: "center" }}>
        LOAN STATUS
      </h2>
      <br></br>
      <br></br>
      <Table
        variant="dark"
        style={{
          width: "90%",
          height: "100px",
          border: "1px solid ",
          justifyContent: "center",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Loan Id</th>
            <th>Status</th>
            {/* <th>View Report</th> */}
          </tr>
        </thead>
        <tbody>
          {LoanStatus.map((item, index) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{index}</td>
                <td>{item.status}</td>
                {/* <td>
                  <Button variant="success">View Report</Button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Loanstatus;
