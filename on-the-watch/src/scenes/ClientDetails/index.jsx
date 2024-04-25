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

  // Render person's details
  return (
    // <Box m="20px">
    //   {/* HEADER */}
    //   <Box
    //     display="flex"
    //     justifyContent="space-between"
    //     alignItems="center"
    //     mb="30px"
    //   >
    //     {/* <Header title={`${firstName}'s Fitly Activity Summary`} /> */}
    //     <Typography
    //       variant="h2"
    //       color={colors.grey[100]}
    //       fontWeight="bold"
    //       sx={{ m: "15 0 5px 0" }}
    //     >
    //       {`${firstName}'s Fitly Activity Summary`}
    //     </Typography>
    //     <Box>
    //       <Button
    //         sx={{
    //           backgroundColor: colors.blueAccent[700],
    //           color: colors.grey[100],
    //           fontSize: "14px",
    //           fontWeight: "bold",
    //           padding: "10px 20px",
    //         }}
    //       >
    //         <DownloadOutlinedIcon sx={{ mr: "10px" }} />
    //         Download Fitly Report
    //       </Button>
    //     </Box>
    //   </Box>

    //   {/* GRID & CHARTS */}
    //   <Box
    //     display="grid"
    //     gridTemplateColumns="repeat(12, 1fr)"
    //     gridAutoRows="140px"
    //     gap="20px"
    //   >
    //     {/* ROW 1 */}
    //     <Box
    //       gridColumn="span 4"
    //       backgroundColor={colors.primary[400]}
    //       display="flex"
    //       alignItems="center"
    //       justifyContent="center"
    //     >
    //       <StatBox
    //         title="12,361"
    //         subtitle="Calories Burned"
    //         progress="0.75"
    //         increase="+14%"
    //         icon={
    //           <EmailIcon
    //             sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
    //           />
    //         }
    //       />
    //     </Box>
    //     <Box
    //       gridColumn="span 4"
    //       backgroundColor={colors.primary[400]}
    //       display="flex"
    //       alignItems="center"
    //       justifyContent="center"
    //     >
    //       <StatBox
    //         title="431,225"
    //         subtitle="Daily Steps Average"
    //         progress="0.50"
    //         increase="+21%"
    //         icon={
    //           <PointOfSaleIcon
    //             sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
    //           />
    //         }
    //       />
    //     </Box>
    //     <Box
    //       gridColumn="span 4"
    //       backgroundColor={colors.primary[400]}
    //       display="flex"
    //       alignItems="center"
    //       justifyContent="center"
    //     >
    //       <StatBox
    //         title="32,441"
    //         subtitle="Workout Sessions"
    //         progress="0.30"
    //         increase="+5%"
    //         icon={
    //           <PersonAddIcon
    //             sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
    //           />
    //         }
    //       />
    //     </Box>
    //     {/* <Box
    //       gridColumn="span 3"
    //       backgroundColor={colors.primary[400]}
    //       display="flex"
    //       alignItems="center"
    //       justifyContent="center"
    //     >
    //       <StatBox
    //         title="1,325,134"
    //         subtitle="Traffic Received"
    //         progress="0.80"
    //         increase="+43%"
    //         icon={
    //           <TrafficIcon
    //             sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
    //           />
    //         }
    //       />
    //     </Box> */}

    //     {/* ROW 2 */}
    //     <Box
    //       gridColumn="span 8"
    //       gridRow="span 2"
    //       backgroundColor={colors.primary[400]}
    //     >
    //       <Box
    //         mt="25px"
    //         p="0 30px"
    //         display="flex "
    //         justifyContent="space-between"
    //         alignItems="center"
    //       >
    //         <Box>
    //           <Typography
    //             variant="h5"
    //             fontWeight="600"
    //             color={colors.grey[100]}
    //           >
    //             Average Calories Burned
    //           </Typography>
    //           <Typography
    //             variant="h3"
    //             fontWeight="bold"
    //             color={colors.greenAccent[500]}
    //           >
    //             April 22nd to April 29th
    //           </Typography>
    //         </Box>
    //         <Box>
    //           <IconButton>
    //             <DownloadOutlinedIcon
    //               sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
    //             />
    //           </IconButton>
    //         </Box>
    //       </Box>
    //       <Box height="250px" m="-20px 0 0 0">
    //         <LineChart isDashboard={true} />
    //       </Box>
    //     </Box>

    //     {/* ROW 3 */}
    //     <Box
    //       gridColumn="span 4"
    //       gridRow="span 2"
    //       backgroundColor={colors.primary[400]}
    //       overflow="auto"
    //     >
    //       <Box
    //         display="flex"
    //         justifyContent="space-between"
    //         alignItems="center"
    //         borderBottom={`4px solid ${colors.primary[500]}`}
    //         colors={colors.grey[100]}
    //         p="15px"
    //       >
    //         <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
    //           Recent Workouts
    //         </Typography>
    //       </Box>
    //       {mockTransactions.map((transaction, i) => (
    //         <Box
    //           key={`${transaction.txId}-${i}`}
    //           display="flex"
    //           justifyContent="space-between"
    //           alignItems="center"
    //           borderBottom={`4px solid ${colors.primary[500]}`}
    //           p="15px"
    //         >
    //           <Box>
    //             <Typography
    //               color={colors.greenAccent[500]}
    //               variant="h5"
    //               fontWeight="600"
    //             >
    //               {transaction.txId}
    //             </Typography>
    //             <Typography color={colors.grey[100]}>
    //               {transaction.user}
    //             </Typography>
    //           </Box>
    //           <Box color={colors.grey[100]}>{transaction.date}</Box>
    //           <Box
    //             backgroundColor={colors.greenAccent[500]}
    //             p="5px 10px"
    //             borderRadius="4px"
    //           >
    //             ${transaction.cost}
    //           </Box>
    //         </Box>
    //       ))}
    //     </Box>
    //     <Box
    //       gridColumn="span 8"
    //       gridRow="span 2"
    //       backgroundColor={colors.primary[400]}
    //       p="30px"
    //     >
    //       <Typography variant="h5" fontWeight="600">
    //         Assign {firstName}'s Next Workout
    //       </Typography>
    //     </Box>
    //     <Box
    //       gridColumn="span 4"
    //       gridRow="span 2"
    //       backgroundColor={colors.primary[400]}
    //     >
    //       <Typography
    //         variant="h5"
    //         fontWeight="600"
    //         sx={{ padding: "30px 30px 0 30px" }}
    //       >
    //         Sales Quantity
    //       </Typography>
    //       <Box height="250px" mt="-20px">
    //         <BarChart isDashboard={true} />
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
    // <Box m="20px">
    //   <Box
    //     display="grid"
    //     gridTemplateColumns="repeat(12, 1fr)"
    //     gridAutoRows="140px"
    //     gap="20px"
    //   >
    //     {" "}
    //     {/* First row */}
    //     <Box
    //       gridColumn="span 3"
    //       backgroundColor={colors.primary[400]}
    //       display="flex"
    //       alignItems="center"
    //       justifyContent="center"
    //     >
    //       <StatBox
    //         title="12,361"
    //         subtitle="Emails Sent"
    //         progress="0.75"
    //         increase="+14%"
    //         icon={
    //           <EmailIcon
    //             sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
    //           />
    //         }
    //       />
    //     </Box>
    //   </Box>
    // </Box>
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <Grid container spacing={2} style={{ height: "100%" }}>
        <Grid item xs={3}>
          {/* Content for the first column */}
          <Box sx={{ backgroundColor: "lightblue", height: "100%" }}>
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={
                <EmailIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          {/* Content for the second column */}
          <Box sx={{ backgroundColor: "lightgreen", height: "100%" }}>
            Second Column
          </Box>
        </Grid>
        <Grid item xs={3}>
          {/* Content for the third column */}
          <Box sx={{ backgroundColor: "lightcoral", height: "100%" }}>
            Third Column
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClientDetails;
