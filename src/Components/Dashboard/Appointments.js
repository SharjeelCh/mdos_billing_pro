import React, { useState } from "react";
import { Card, Col, Row, List, Avatar, Typography, Button, Space, Tabs } from "antd";
import { CalendarOutlined, ClockCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import "../../Styles/Appointments.css";

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. John Doe",
    specialty: "Cardiologist",
    date: "2024-08-01",
    time: "10:00 AM",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    doctor: "Dr. Jane Smith",
    specialty: "Dermatologist",
    date: "2024-08-05",
    time: "2:00 PM",
    avatar: "https://via.placeholder.com/150",
  },
];

const pastAppointments = [
  {
    id: 3,
    doctor: "Dr. Richard Roe",
    specialty: "Pediatrician",
    date: "2024-07-20",
    time: "11:00 AM",
    avatar: "https://via.placeholder.com/150",
  },
];

const Appointments = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const handleDelete = (id) => {
    console.log("Delete appointment with id:", id);
  };

  const renderAppointments = (appointments) => (
    <Row gutter={[16, 16]}>
      {appointments.map((appointment) => (
        <Col xs={24} sm={24} md={12} lg={8} key={appointment.id}>
          <Card className="appointment-card">
            <List.Item>
              <List.Item.Meta
              //  avatar={<Avatar src={appointment.avatar} />}
                title={appointment.doctor}
                description={appointment.specialty}
              />
            </List.Item>
            <Space direction="vertical" size="middle">
              <Text>
                <CalendarOutlined /> {appointment.date}
              </Text>
              <Text>
                <ClockCircleOutlined /> {appointment.time}
              </Text>
              <Button
                type="primary"
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleDelete(appointment.id)}
              >
                Cancel Appointment
              </Button>
            </Space>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <div className="appointments-container">
      <Title level={2} className="page-title">Your Appointments</Title>
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab="Upcoming" key="upcoming">
          {renderAppointments(upcomingAppointments)}
        </TabPane>
        <TabPane tab="Past" key="past">
          {renderAppointments(pastAppointments)}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Appointments;
