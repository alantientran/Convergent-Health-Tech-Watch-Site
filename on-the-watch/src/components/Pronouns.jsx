import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";

const Pronouns = ({ birthday }) => {
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
        Prounouns
      </Typography>
      <Typography variant="body1" sx={{ color: colors.grey[100] }}>
        He/Him
      </Typography>
    </Box>
  );
};

export default Pronouns;
