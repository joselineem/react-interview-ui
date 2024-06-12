import { Alert } from '@mui/material';
import { fetchCreateWidget } from '../../lib/apiConnect';
import { useState } from 'react';
import { WidgetForm } from '../WidgetForm';

export default function CreateWidget() {
  const [created, setCreated] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    const dataForm = new FormData(event.currentTarget);
    fetchCreateWidget({
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
          Widget created correctly
        </Alert>
      )}
      {error && (
        <Alert variant='filled' severity='error'>
          {error.message}
        </Alert>
      )}

      <WidgetForm
        title='Create a new Widget'
        text='Name must be unique'
        buttonText='Create'
        handleSubmit={handleSubmit}
      />
    </>
  );
}
