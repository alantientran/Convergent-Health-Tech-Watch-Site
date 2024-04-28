import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import MailIcon from "@mui/icons-material/Mail";

const ContactDetails = ({ name, phone, email }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start" // Center items horizontally
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
        {name}'s Contact Details
      </Typography>
      <Box
        display="flex"
        alignItems="center" // Center items horizontally
        sx={{ color: colors.grey[100], marginBottom: "8px" }}
      >
        <PermPhoneMsgIcon
          sx={{ color: colors.greenAccent[600], marginRight: "8px" }}
        />
        <Typography variant="body1">{phone}</Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center" // Center items horizontally
        sx={{ color: colors.grey[100] }}
      >
        <MailIcon sx={{ color: colors.greenAccent[600], marginRight: "8px" }} />
        <Typography variant="body1">{email}</Typography>
      </Box>
    </Box>
  );
};

export default ContactDetails;
