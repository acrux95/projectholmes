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

const StateMenu = ({ id, label, description }) => {
  const [state, setState] = React.useState('');
  const classes = useStyles();
  const handleChange = (event) => {
    setState(event.target.value);
  };
  const states = [
    {
      value: 'CDMX',
      label: 'Cd. de México',
    },
    {
      value: 'MX',
      label: 'Estado de México',
    },
    {
      value: 'JL',
      label: 'Jalisco',
    },
    {
      value: 'Pue',
      label: 'Puebla',
    },
    {
      value: 'Cue',
      label: 'Morelos',
    },
    {
      value: 'MY',
      label: 'Monterrey',
    },
  ];

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <TextField
          id={id}
          select
          label={label}
          value={state}
          onChange={handleChange}
          helperText={description}
          variant='outlined'
        >
          {states.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
};

export default StateMenu;
