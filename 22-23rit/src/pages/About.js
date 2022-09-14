
import React from "react";
import { Row, Card } from "react-bootstrap";

/*
Communication Lead - Ben
Scrum Master - Cameron
Website Lead - Spencer
Tech Lead - Joey


*/
const About = () => {
    return (
        <>
            <h1>About Us</h1>
            <Row className="card-row">
                <h6>Team Members</h6>
                <Card className="team-member-card">
                    <Card.Title>Ben Radley</Card.Title>
                    <Card.Subtitle className="text-muted">Comunication Lead</Card.Subtitle>
                </Card>
                <Card className="team-member-card">
                    <Card.Title>Cameron Riu</Card.Title>
                    <Card.Subtitle className="text-muted">Scrum Master</Card.Subtitle>
                </Card>
                <Card className="team-member-card">
                    <Card.Title>Joseph Saltalamacchia</Card.Title>
                    <Card.Subtitle className="text-muted">Tech Lead</Card.Subtitle>
                </Card>
                <Card className="team-member-card">
                    <Card.Title>Spencer Stissi</Card.Title>
                    <Card.Subtitle className="text-muted">Website Manager</Card.Subtitle>
                </Card>
            </Row>
            <Row>
                <h6>Sponsors / Coaches</h6>
                <Card className="team-member-card">
                    <Card.Title>Zhe Yu</Card.Title>
                    <Card.Subtitle className="text-muted">Team Coach</Card.Subtitle>
                </Card>
                <Card className="team-member-card">
                    <Card.Title>Anthony Peruma</Card.Title>
                    <Card.Subtitle className="text-muted">Sponsor / Founder</Card.Subtitle>
                </Card>
                <Card className="team-member-card">
                    <Card.Title>Christian Newman</Card.Title>
                    <Card.Subtitle className="text-muted">Sponsor</Card.Subtitle>
                </Card>
                <Card className="team-member-card">
                    <Card.Title>Mohamed Mkaouer</Card.Title>
                    <Card.Subtitle className="text-muted">Sponsor</Card.Subtitle>
                </Card>
            </Row>
            
        </>
    )
}

export default About;