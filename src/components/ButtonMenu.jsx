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

const ButtonMenu = ({ id, label, description, value, setValue, values }) => {

  const classes = useStyles();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <TextField
          id={id}
          select
          label={label}
          value={value}
          onChange={handleChange}
          helperText={description}
          variant='outlined'
        >
          {values.map((option) => (
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
