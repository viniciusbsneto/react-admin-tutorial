import React from 'react';
import { FieldProps } from 'react-admin'

const PostTitle: React.FC<FieldProps> = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
}

export default PostTitle;