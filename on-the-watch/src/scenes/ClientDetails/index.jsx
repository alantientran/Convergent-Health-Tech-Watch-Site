import { useLocation, useParams, Link } from "react-router-dom";
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
import { mockTransactions } from "../../data/mockData";
import EmailIcon from "@mui/icons-material/Email";
import { tokens } from "../../theme";
import ProgressCircle from "../../components/ProgressCircle";
import PersonalGoal from "../../components/PersonalGoal";
import Weight from "../../components/Weight";
import ContactDetails from "../../components/ContactDetails";
import Age from "../../components/Age";
import Pronouns from "../../components/Pronouns";
import Calendar from "../calendar";
import BedIcon from "@mui/icons-material/Bed";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

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
    <>
      <Box gridColumn="span 12" sx={{ marginLeft: "30px" }}>
        <Box mb="10px">
          <Typography
            variant="h1"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: 0 }}
          >
            {`${firstName}'s Fitly Profile`}
          </Typography>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="10px"
        height="100vh" // Set height to 100vh
        sx={{ marginLeft: "25px", overflowY: "hidden" }}
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
            alignItems="flex-start"
            justifyContent="center"
            sx={{ padding: "10px" }} // Add some padding to the box
          >
            <Box mb="10px">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: 0 }}
              >
                Logistics
              </Typography>
            </Box>
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
          </Box>
        </Box>
        <Box gridColumn="span 3">
          {/* Content for the second column */}
          <Box
            // backgroundColor={colors.primary[400]}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            sx={{ padding: "10px", marginLeft: "5px", marginRight: "5px" }}
          >
            <Box mb="10px">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: 0, marginLeft: "15px" }}
              >
                Fitness Stats
              </Typography>
            </Box>
            <Box
              sx={{
                marginBottom: "30px",
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: "10px",
                maxHeight: "585px",
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  width: "10px",
                  backgroundColor: "#f1f1f1", // Change background color of the scrollbar track
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#DDD", // Change color of the scrollbar thumb
                  borderRadius: "10px", // Optional: add border-radius to the scrollbar thumb
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: "#CCC", // Change color of the scrollbar thumb on hover
                },
                "&::-webkit-scrollbar-track:hover": {
                  width: "10px",
                  backgroundColor: "#EEE", // Change background color of the scrollbar track
                },
              }}
            >
              <Box gridColumn="span 12">
                <StatBox
                  title="68 BPM"
                  subtitle={
                    <span>
                      Average Heart <br /> Rate
                    </span>
                  }
                  progress="0.75"
                  increase="+14%"
                  icon={
                    <FavoriteIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                  }
                  sx={{
                    backgroundColor: colors.primary[400],
                    width: "100%",
                    margin: "0 15px", // Adjust margin as per your design
                  }}
                />
              </Box>
              <Box gridColumn="span 12">
                <StatBox
                  title="5,610 Steps"
                  subtitle="Today's Steps"
                  progress="0.56"
                  increase="+14%"
                  icon={
                    <DirectionsWalkIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                  }
                  sx={{
                    backgroundColor: colors.primary[400],
                    width: "100%",
                    margin: "0 15px", // Adjust margin as per your design
                  }}
                />
              </Box>
              <Box gridColumn="span 12">
                <StatBox
                  title="7 hr 35 min"
                  subtitle="Hours Slept"
                  progress="0.75"
                  increase="+14%"
                  icon={
                    <BedIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                  }
                  sx={{
                    backgroundColor: colors.primary[400],
                    width: "100%",
                    margin: "0 15px", // Adjust margin as per your design
                  }}
                />
              </Box>
              <Box gridColumn="span 12">
                <StatBox
                  title="353 Calories"
                  subtitle="Calories Burned"
                  progress="0.8825"
                  increase="+14%"
                  icon={
                    <LocalFireDepartmentIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                  }
                  sx={{
                    backgroundColor: colors.primary[400],
                    width: "100%",
                    margin: "0 15px", // Adjust margin as per your design
                  }}
                />
              </Box>
              <Box gridColumn="span 12">
                <StatBox
                  title="12,361"
                  subtitle="Daily Average Steps"
                  progress="0.75"
                  increase="+14%"
                  icon={
                    <EmailIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                  }
                  sx={{
                    backgroundColor: colors.primary[400],
                    width: "100%",
                    margin: "0 15px", // Adjust margin as per your design
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box gridColumn="span 6">
          {/* Content for the third column */}
          <Box
            // backgroundColor={colors.primary[400]}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            sx={{ padding: "10px" }}
          >
            <Box mb="10px">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: 0 }}
              >
                Scheduled Training
              </Typography>
            </Box>
            <Box>
              <Calendar vh_height={50} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ClientDetails;
