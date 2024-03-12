import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'https://i.cbc.ca/1.5971441.1690314595!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/shutterstock-medium-file.jpg',
  },
  {
    imgPath:
      'https://www.bordermail.com.au/images/transform/v1/crop/frm/silverstone-feed-data/1da3e0a4-4346-4dad-b8f1-3a2d26dbe62c.jpg/r0_0_800_600_w1200_h678_fmax.jpg',
  },
  {
    imgPath:
      'https://globalnews.ca/wp-content/uploads/2023/06/6Tu-BLOOD_DONORS_NEEDED_VO.00_00_23_05.Still001.jpg?quality=85&strip=all&w=1200',
  },
];

function Carousl() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;



  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1, marginTop: "50px" }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div style={{ height: "100dvh" }} keys={step.label} key = {index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                key={index}
                component="img"
                sx={{
                  height: "100dvh",
                  display: 'block',
                  maxWidth: "100%",
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>




    </Box>
  );
}

export default Carousl;