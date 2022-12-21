import { Grid, InputLabel, TextField } from '@mui/material';

const labelStyle = {
  color: '#607D8B'
};

const inputStyle = {
  borderRadius: 1.5,
  backgroundColor: '#fff',
  "& .MuiOutlinedInput-root": {
    borderRadius: 1.5,
    "&.Mui-focused fieldset": {
      borderColor: '#2ECC71'
    },
  }
};

function InputComponent(props) {
  return (
    <Grid item xs={12}>
      <InputLabel sx={labelStyle}>{props.labelName}</InputLabel>
      <TextField fullWidth hiddenLabel
        id="outlined-basic" variant="outlined" size='small'
        sx={inputStyle}  
        value={props.value}
        onChange={props.onChange}
      />
    </Grid>
  );
}

export default InputComponent;
