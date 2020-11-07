import React from 'react';
import { UrlFieldProps } from 'react-admin';

const MyUrlField: React.FC<UrlFieldProps> = ({ record, source }) => {
  
  if (record && source) {
    return <a href={record[source]}>{record[source]}</a>;
  } else {
    return <a href="/#">No URL defined</a>;
  }
}

export default MyUrlField;