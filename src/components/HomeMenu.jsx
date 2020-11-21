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

const HomeMenu = ({ id, label, description }) => {
  const [home, setHome] = React.useState('');
  const classes = useStyles();
  const handleChange = (event) => {
    setHome(event.target.value);
  };
  const homes = [
    {
      value: 'home',
      label: 'Casa',
    },
    {
      value: 'apartment',
      label: 'Departamento',
    },
    {
      value: 'wipe',
      label: 'Terreno',
    },
    {
      value: 'torre',
      label: 'Edificio',
    },
  ];

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <TextField
          id={id}
          select
          label={label}
          value={home}
          onChange={handleChange}
          helperText={description}
          variant='outlined'
        >
          {homes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
};

export default HomeMenu;
