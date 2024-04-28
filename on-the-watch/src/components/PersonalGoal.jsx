import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";

const PersonalGoal = ({ name, goal }) => {
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
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: colors.grey[100], fontWeight: "bold", marginBottom: 1 }}
      >
        {name}'s Personal Goal
      </Typography>
      <Typography variant="body1" sx={{ color: colors.grey[100] }}>
        {goal}
      </Typography>
    </Box>
  );
};

export default PersonalGoal;
