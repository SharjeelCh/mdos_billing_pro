import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  Col,
  Row,
  List,
  Typography,
  Button,
  Space,
  Tabs,
  Flex,
} from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "../../Styles/Appointments.css";
import { useSelector } from "react-redux";
import DialogComp from "../DialogComp";

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const Appointments = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const user = useSelector((state) => state.auth.user);
  const [appointments, setAppointments] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          "http://localhost/api/getAppointment/",
          {
            params: { user_id: user.id },
          }
        );
        setAppointments(response.data.appointments || []);
        console.log(response.data.appointments);
      } catch (error) {
        console.error("Failed to fetch appointments:", error);
      }
    };

    if (user && user.id) {
      fetchAppointments();
    }
  }, [user]);

  useEffect(() => {
    const categorizeAppointments = () => {
      const now = new Date();
      const upcoming = [];
      const past = [];
      if (appointments.length === 0) return;
      appointments.forEach((appointment) => {
        const appointmentDateTime = new Date(
          `${appointment.appointment_date}T${appointment.appointment_time}`
        );
        if (appointmentDateTime > now) {
          upcoming.push(appointment);
        } else {
          past.push(appointment);
        }
      });

      setUpcomingAppointments(upcoming);
      setPastAppointments(past);
    };

    categorizeAppointments();
  }, [appointments]);

  const handleDelete = async (id) => {
    try {
      await axios.get(`http://localhost/api/deleteAppointment/`, {
        params: { user_id: user.id },
      });
      setAppointments(
        appointments.filter((appointment) => appointment.id !== id)
      );
      setPastAppointments(
        pastAppointments.filter((appointment) => appointment.id !== id)
      );
      setUpcomingAppointments(
        upcomingAppointments.filter((appointment) => appointment.id !== id)
      );
      alert("Appointment deleted successfully");
    } catch (error) {
      console.error("Failed to delete appointment:", error);
    }
  };

  const handleCardClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowDialog(true);
  };

  const renderAppointments = (appointments) => (
    <Row gutter={[16, 16]}>
      {appointments.map((appointment) => (
        <Col xs={24} sm={24} md={12} lg={8} key={appointment.id}>
          <Card
            className="appointment-card"
            onClick={() => {
              handleCardClick(appointment);
              setShowDialog(true);
            }}
          >
            <List.Item>
              <List.Item.Meta
                title={appointment.provider}
                description={appointment.appointment_type}
              />
            </List.Item>
            <Space direction="vertical" size="middle">
              <Text>
                <CalendarOutlined /> {appointment.appointment_date}
              </Text>
              <Text>
                <ClockCircleOutlined /> {appointment.appointment_time}
              </Text>
              <Button
                type="primary"
                danger
                icon={<DeleteOutlined />}
                className="cancel-button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click event
                  handleDelete(appointment.id);
                }}
              >
                <p className="cancel-p">Cancel Appointment</p>
              </Button>
            </Space>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <div className="appointments-container">
      <Title level={2} className="page-title">
        Your Appointments
      </Title>
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab="Upcoming" key="upcoming">
          {showDialog && selectedAppointment && (
            <DialogComp
              open={showDialog}
              onClose={() => setShowDialog(false)}
              appointment={selectedAppointment}
            />
          )}
          {upcomingAppointments.length === 0 ? (
            <Flex
              style={{
                flexDirection: "column",
                alignSelf: "flex-start",
                width: "fit-content",
              }}
            >
              <Title level={4} className="no-appointments">
                No upcoming appointments
              </Title>
              <Button
                type="default"
                href="/"
                style={{ borderRadius: "40px", padding: "23px", width: "100%" }}
              >
                Book Appointment
              </Button>
            </Flex>
          ) : (
            renderAppointments(upcomingAppointments)
          )}
        </TabPane>
        <TabPane tab="Past" key="past">
          {showDialog && selectedAppointment && (
            <DialogComp
              open={showDialog}
              onClose={() => setShowDialog(false)}
              appointment={selectedAppointment}
            />
          )}
          {pastAppointments.length === 0 ? (
            <Flex
              style={{
                flexDirection: "column",
                alignSelf: "flex-start",
                width: "fit-content",
              }}
            >
              <Title level={4} className="no-appointments">
                No Past appointments
              </Title>
            </Flex>
          ) : (
            renderAppointments(pastAppointments)
          )}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Appointments;
