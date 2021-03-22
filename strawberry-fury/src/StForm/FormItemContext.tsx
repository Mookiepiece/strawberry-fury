import React from 'react';

export const FormItemContext = React.createContext<{
  name: string;
}>({
  name: '',
});
