import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Weight = ({ start_weight, cur_weight }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      sx={{
        backgroundColor: colors.primary[400],
        paddingY: "20px",
        paddingX: "10px",
        borderRadius: "10px",
        width: "100%", // Set width to 100% to span the entire column
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: colors.grey[100], fontWeight: "bold", marginBottom: 1 }}
      >
        Starting Weight vs Now
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="body1"
          sx={{ color: colors.grey[100], marginRight: 1 }}
        >
          {start_weight} lbs
        </Typography>
        <ArrowForwardIcon sx={{ color: colors.greenAccent[600] }} />
        <Typography
          variant="body1"
          sx={{ color: colors.grey[100], marginLeft: 1 }}
        >
          {cur_weight} lbs
        </Typography>
      </Box>
    </Box>
  );
};

export default Weight;
