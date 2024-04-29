import React from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const TrainingComponent = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <div className="training-component" style={{ backgroundColor: 'white', width: '300px', padding: '10px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <div className="icon">
          <IconButton>
            <FitnessCenterIcon
              sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
            />
          </IconButton>
        </div>
        <div className="content">
          <div className="title">Training - Strength Training Class</div>
          <div className="dots">
          </div>
          <div className="date">April 29, 2024</div>
          <div className="category">Fitness</div>
        </div>
      </div>
  );
};

export default TrainingComponent;
