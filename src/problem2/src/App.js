import { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import InputComponent from './components/inputComponent';

const headerStyle = {
  marginBottom: 3,
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 20,
  color: '#66BB6A'
}

const boxStyle = {
  width: 300,
  flexGrow: 1,
  padding: 4,
  borderRadius: 3,
  backgroundColor: '#ECF0F1',
};

const submitBtnStyle = {
  marginTop: 2,
  padding: 1,
  borderRadius: 5,
  backgroundImage: 'linear-gradient(45deg, #2ECC71, #1ABC9C)',
};

function App() {
  const [formState, setFormState] = useState(
    { 
      address: '',
      amount: '0',
      otp: '' 
    }
  );

  const otpOnChangeHandler = (e) => {
    const value = e.target.value;
    const isNumeric = !isNaN(+value);

    if(isNumeric && value.length <= 6) {
      setFormState({
        ...formState,
        otp: e.target.value
      });
    }
  };

  return (
    <div className="App">

      <Box sx={boxStyle}>
        <Typography sx={headerStyle}>SEND TRANSACTION</Typography>
        <Grid container spacing={2}>
          <InputComponent 
            labelName="ETH Address" 
            value={formState.address} 
          />
          <InputComponent 
            labelName="Amount to send" 
            value={formState.amount} 
          />
          <InputComponent 
            labelName="OTP Authentication" 
            value={formState.otp}
            onChange={otpOnChangeHandler}
          />
          <Grid item xs={12}>
            <Button fullWidth sx={submitBtnStyle} variant="contained">SEND</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
