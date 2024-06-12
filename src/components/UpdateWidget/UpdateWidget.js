import { Alert } from '@mui/material';
import { fetchUpdateWidget } from '../../lib/apiConnect';
import { WidgetForm } from '../WidgetForm';
import { useState } from 'react';

export default function UpdateWidget() {
  const [created, setCreated] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.currentTarget);
    fetchUpdateWidget({
      name: dataForm.get('name'),
      description: dataForm.get('description'),
      price: dataForm.get('price'),
    })
      .then(() => setCreated(true))
      .catch(setError);
  };
  return (
    <>
      {created && (
        <Alert variant='filled' severity='success'>
          Widget updated correctly
        </Alert>
      )}
      {error && (
        <Alert variant='filled' severity='error'>
          {error.message}
        </Alert>
      )}
      <WidgetForm
        title='Update Widget by name'
        text="Update based in name. Name can't be changed."
        buttonText='Update'
        handleSubmit={handleSubmit}
      />
    </>
  );
}
