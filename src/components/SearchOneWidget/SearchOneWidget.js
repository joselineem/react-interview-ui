import { Container } from '@mui/material';
import { WidgetFormName } from '../WidgetForm';
import { fetchOneWidget } from '../../lib/apiConnect';
import { useState } from 'react';
import DisplayWidget from '../WidgetDisplay';

export default function SearchOneWidget() {
  const [widget, setWidget] = useState(null);
  const handleSubmit = (event) => {
    const dataForm = new FormData(event.currentTarget);
    fetchOneWidget(dataForm.get('name')).then((data) => setWidget(data));
  };
  return (
    <Container>
      <WidgetFormName
        title='Search widget'
        buttonText='Search'
        handleSubmit={handleSubmit}
      />
      {widget && <DisplayWidget widget={widget} />}
    </Container>
  );
}
