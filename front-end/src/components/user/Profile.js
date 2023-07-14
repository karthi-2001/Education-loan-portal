import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import profileImage from "../../images/userimg.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Profile.css";

const UserProfileCard = ({ name, email, userid, age, address }) => {
  return (
    <div className="container">
      <Container style={{ paddingTop: "30px" }}>
        <Row >
          <Col className="col-md-4">
            <Card className="user-profile-card" id="myCard3">
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  User Profile
                </Card.Title>
                <img
                  src={profileImage}
                  alt="Profile"
                  className="img-fluid rounded-circle"
                  style={{ width: "150px", height: "150px" }}
                />
                <Card.Text>
                  <div>
                    <br></br>
                    <label>Name:</label>
                    <input
                      type="text"
                      value={name}
                      readOnly
                      className="form-control"
                    />
                  </div>
                  <div>
                    <br></br>
                    <label>User Id:</label>
                    <input
                      type="text"
                      value={userid}
                      readOnly
                      className="form-control"
                    />
                  </div>
                  <div>
                    <br></br>
                    <label>Email:</label>
                    <input
                      type="email"
                      value={email}
                      readOnly
                      className="form-control"
                    />
                  </div>
                  <div>
                    <br></br>
                    <label>Age:</label>
                    <input
                      type="text"
                      value={age}
                      readOnly
                      className="form-control"
                    />
                  </div>
                  <div>
                    <br></br>
                    <label>Address:</label>
                    <textarea
                      value={address}
                      readOnly
                      className="form-control"
                    />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const App = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Fetch the user profile data from the backend
    fetchUserProfileData()
      .then((data) => {
        setUserProfile(data);
      })
      .catch((error) => {
        console.log("Error fetching user profile:", error);
      });
  }, []);

  const fetchUserProfileData = () => {
    // Simulated API call to fetch user profile data
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = {
          name: "Priyanshu",
          userid: "101",
          email: "priyanshu@virtusa.com",
          age: 21,
          address: "Kolkata",
        };
        resolve(userData);
      }, 1000);
    });
  };

  return (
    <div className="App">
      {userProfile ? (
        <UserProfileCard {...userProfile} />
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default App;
