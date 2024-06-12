import { Alert } from '@mui/material';
import { fetchDeleteWidget } from '../../lib/apiConnect';
import { useState } from 'react';
import { WidgetFormName } from '../WidgetForm';

export default function DeleteWidget() {
  const [deleted, setDeleted] = useState(false);

  const handleSubmit = (event) => {
    const dataForm = new FormData(event.currentTarget);
    fetchDeleteWidget(dataForm.get('name')).then(() => setDeleted(true));
  };
  return (
    <>
      {deleted && <Alert>Deleted Succesfully </Alert>}
      <WidgetFormName
        title='Delete widget by name'
        buttonText='Delete'
        handleSubmit={handleSubmit}
      />
    </>
  );
}
