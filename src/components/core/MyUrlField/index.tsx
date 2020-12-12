import React from 'react';
import { UrlFieldProps } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles({
  link: {
      textDecoration: 'none',
  },
  icon: {
      width: '0.5em',
      paddingLeft: 2,
  },
});

const MyUrlField: React.FC<UrlFieldProps> = ({ record, source }) => {
  const classes = useStyles();
  
  if (record && source) {
    return <a className={classes.link} href={record[source]}>{record[source]}<LaunchIcon className={classes.icon} /></a>;
  } else {
    return <a href="/#">No URL defined</a>;
  }
}

export default MyUrlField;