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

const TypeOfAdd = ({ id, label, description }) => {
  const [add, setAdd] = React.useState('');
  const classes = useStyles();
  const handleChange = (event) => {
    setAdd(event.target.value);
  };
  const Adds = [
    {
      value: 'Rent',
      label: 'Renta',
    },
    {
      value: 'sold',
      label: 'Venta',
    },
  ];

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <TextField
          id={id}
          select
          label={label}
          value={add}
          onChange={handleChange}
          helperText={description}
          variant='outlined'
        >
          {Adds.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
};

export default TypeOfAdd;
