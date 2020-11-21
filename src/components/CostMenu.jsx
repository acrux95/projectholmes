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

const CostMenu = ({ id, label, description }) => {
  const [cost, setCost] = React.useState('');
  const classes = useStyles();
  const handleChange = (event) => {
    setCost(event.target.value);
  };

  const costes = [
    {
      value: 'price1',
      label: 'Menos de $200USD',
    },
    {
      value: 'price2',
      label: 'entre $201 y $700 USD ',
    },
    {
      value: 'price3',
      label: 'entre $701 y $1,500 USD',
    },
    {
      value: 'price4',
      label: 'Más de $1500USD',
    },
  ];

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <TextField
          id={id}
          select
          label={label}
          value={cost}
          onChange={handleChange}
          helperText={description}
          variant='outlined'
        >
          {costes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
};

export default CostMenu;
