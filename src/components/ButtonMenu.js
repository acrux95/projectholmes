import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const ButtonMenu = ({ id, label, description }) => {
  const [country, setCountry] = React.useState('');
  const classes = useStyles();
  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  const countries = [
    {
      value: 'MX',
      label: 'México',
    },
    {
      value: 'COL',
      label: 'Colombia',
    },
  ];

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <TextField
          id={id}
          select
          label={label}
          value={country}
          onChange={handleChange}
          helperText={description}
          variant='outlined'
        >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
};

export default ButtonMenu;
