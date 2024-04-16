import { useLocation, useParams } from "react-router-dom";
import { mockDataTeam } from "../../data/mockData"; // Import mock data
import Bar from "../bar";
import Box from "@mui/material/Box";

const ClientDetails = () => {
  const location = useLocation();
  const { id } = useParams(); // Access the person's ID from URL parameters

  // Find the client with the matching ID
  const personDetails = mockDataTeam.find(
    (client) => client.id === parseInt(id)
  );

  if (!personDetails) {
    return <div>Loading...</div>; // Handle case where personDetails is not available yet
  }

  // Render person's details
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {" "}
        <Bar />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {" "}
        <h2>{personDetails.name}</h2>
        <p>Age: {personDetails.age}</p>
        <p>Email: {personDetails.email}</p>
        {/* Add more details as needed */}
      </Box>
    </Box>
  );
};

export default ClientDetails;
