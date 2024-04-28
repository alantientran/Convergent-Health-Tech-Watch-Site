import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";

const Age = ({ birthday }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const calculateAge = (birthday) => {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const age = calculateAge(birthday);
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
        Age
      </Typography>
      <Typography variant="body1" sx={{ color: colors.grey[100] }}>
        {age}
      </Typography>
    </Box>
  );
};

export default Age;
