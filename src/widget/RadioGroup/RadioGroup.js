import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    '& .Mui-checked': {
      color: '#227AEB'
    }
  },
}));

export default props => {
  const {
    radiolist, className, size, selected
  } = props;
  const classList = useStyles();
  return (
    <RadioGroup
      {...props}
      className={`${classList.root} ${className}`}
    >
      {
        radiolist.map(list => (
          <FormControlLabel
            key={list.id}
            value={list.value || list.label}
            control={<Radio size={size} />}
            label={list.label}
            checked={selected === list.value}
          />
        ))
      }
    </RadioGroup>
  );
};
