import { Button, Table } from "react-bootstrap";
import React from "react";
import StyleAlign from "./StyleAlign";
import editIcon from "../../assets/editIcon.svg";

const Align = () => {
  const data = [
    "Mid-Quarter Check-In",
    "Sam Smith",
    "Jan 5, 2022",
    "5",
    "80% (4 of 5)",
    "1 Day",
    <img src={editIcon    } /> 
  ];
  return (
    <StyleAlign>
      <div className="align-banner">
        <div className="align-banner-heading">Align</div>
        <div className="align-banner-paragraph">
          Aggregate people, performance, and progress in minutes, not weeks.
        </div>
      </div>
      <div className="align-container">
        <div className="align-container-requests d-flex">
          <div className="align-container-requests-1stheading">
            Align Requests
          </div>
          <div className="align-container-requests-2ndheading">
            Compeleted Align Requests
          </div>
        </div>
        <div className="align-container-objective  d-flex px-5">
          <div className="align-container-objective-heading text-dark">
            
            Objective
          </div>
          <div className="align-container-objective-heading fw-bold text-dark">
            Be proactive with customer success
          </div>
          <div className="align-container-objective-heading">Contributor</div>
          <div className="align-container-objective-heading">Last Check-In</div>
          <div className="align-container-objective-heading text-dark">
            30 days ago
          </div>
          <Button className="align-container-objective-btn">Start</Button>
        </div>
        <div className="align-container-requests d-flex">
          <div className="align-container-requests-1stheading">
            Align Requests
          </div>
          <div className="align-container-requests-2ndheading">
            Compeleted Align Requests
          </div>
          <Button className="align-container-requests-btn">+ Request Alignment</Button>
        </div>
        <div>
          <Table className="align-container-table">
            <thead className="align-container-table-heading">
              <tr>
                <th> Name</th>
                <th>Requestor</th>
                <th>Date Requested</th>
                <th># of OKR Items</th>
                <th>% Complete</th>
                <th>Time Remaining</th>
                <th>Edit</th>
              </tr>
            </thead>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className="align-container-table-data">
              
                {data.map((v, i) => (
                  <td key={i}>{v}</td>
                ))}
              </tr>
            ))}
          </Table>
        </div>
      </div>
    </StyleAlign>
  );
};

export default Align;
