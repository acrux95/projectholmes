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

const CityMenu = ({ id, label, description }) => {
  const [city, setCity] = React.useState('');
  const classes = useStyles();
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const cities = [
    {
      value: 'AO',
      label: 'Alvaro Obregon',
    },
    {
      value: 'AZ',
      label: 'Azcapotzalco',
    },
    {
      value: 'BJ',
      label: 'Benito Juárez',
    },
    {
      value: 'CH',
      label: 'Cuauhtémoc',
    },
    {
      value: 'Cy',
      label: 'Coyoacán',
    },
    {
      value: 'CJ',
      label: 'Cuajimalpa',
    },
    {
      value: 'GAM',
      label: 'Gustavo A. Madero',
    },
    {
      value: 'IT',
      label: 'Iztacalco',
    },
  ];

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <TextField
          id={id}
          select
          label={label}
          value={city}
          onChange={handleChange}
          helperText={description}
          variant='outlined'
        >
          {cities.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
};

export default CityMenu;
