import { useLocation, useParams } from "react-router-dom";
import { mockDataTeam } from "../../data/mockData"; // Import mock data
import {
  Grid,
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import StatBox from "../../components/StatBox";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { tokens } from "../../theme";
import ProgressCircle from "../../components/ProgressCircle";
import PersonalGoal from "../../components/PersonalGoal";
import Weight from "../../components/Weight";
import ContactDetails from "../../components/ContactDetails";
import Age from "../../components/Age";
import { Link } from "react-router-dom";
import Pronouns from "../../components/Pronouns";

const ClientDetails = () => {
  const location = useLocation();
  const { id } = useParams(); // Access the person's ID from URL parameters

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Find the client with the matching ID
  const personDetails = mockDataTeam.find(
    (client) => client.id === parseInt(id)
  );

  if (!personDetails) {
    return <div>Loading...</div>; // Handle case where personDetails is not available yet
  }
  const firstName = personDetails.name.split(" ")[0];
  const { phone, email, birthday } = personDetails;

  // Render person's details
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="10px"
      height="100vh" // Set height to 100vh
      sx={{ marginLeft: "30px" }}
    >
      {/* Return button to clients page */}
      {/* <Box gridColumn="span 3">
        <Link to="/clients">
          <Button variant="contained">Return to Clients</Button>
        </Link>
      </Box> */}
      {/* ROW 1 */}
      <Box gridColumn="span 3">
        {/* Content for the first column */}
        <Box
          // backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column" // Stack StatBox components on top of each other
          alignItems="center"
          justifyContent="center"
          sx={{ padding: "10px" }} // Add some padding to the box
        >
          <Box sx={{ marginBottom: "30px" }}>
            <PersonalGoal
              name={firstName}
              goal="My goal is to achieve a healthier lifestyle by going to the gym regularly and maintaining a balanced diet. I aim to improve my overall fitness level and build strength, allowing me to lead a more active and fulfilling life."
            />
          </Box>
          <Box
            sx={{
              marginBottom: "30px",
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "20px",
            }}
          >
            <Box gridColumn="span 6">
              <Pronouns />
            </Box>
            <Box gridColumn="span 6">
              <Age birthday={birthday} />
            </Box>
          </Box>
          <Box sx={{ marginBottom: "30px", width: "100%" }}>
            <Weight start_weight={164} cur_weight={158} />
          </Box>

          <Box sx={{ marginBottom: "30px", width: "100%" }}>
            <ContactDetails name={firstName} email={email} phone={phone} />{" "}
          </Box>
          {/* <Box
          sx={{
            marginBottom: "30px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "20px",
          }}
          >
          <Box gridColumn="span 6">
          <Pronouns />
          </Box>
          <Box gridColumn="span 1">
          <Age birthday={birthday} />
          </Box>
        </Box> */}

          {/* Content for the third column */}
        </Box>
      </Box>
      <Box gridColumn="span 6">
        {/* Content for the second column */}
        <Box
          // backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column" // Stack StatBox components on top of each other
          alignItems="center"
          justifyContent="center"
          sx={{ padding: "10px" }} // Add some padding to the box
        ></Box>
      </Box>
      <Box gridColumn="span 3">
        {/* Content for the third column */}
        <Box
          // backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column" // Stack StatBox components on top of each other
          alignItems="center"
          justifyContent="center"
          sx={{ padding: "10px" }} // Add some padding to the box
        ></Box>
      </Box>
    </Box>
  );
};

export default ClientDetails;
