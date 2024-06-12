import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import './WidgetForm.css';

export default function WidgetForm({ handleSubmit, title, text, buttonText }) {
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event);
  };
  return (
    <Paper elevation={6} square className='widget-container'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 10,
        }}
        component='form'
        noValidate
        onSubmit={onSubmit}
      >
        <Typography component='h1' variant='h3'>
          {title}
        </Typography>
        <Typography>{text}</Typography>
        <TextField
          type='text'
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='name'
          label='Name'
          name='name'
          autoComplete='name'
          autoFocus
        />
        <TextField
          type='text'
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='description'
          label='Description'
          name='description'
          autoComplete='Description'
          autoFocus
        />
        <TextField
          type='text'
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='price'
          label='Price'
          name='price'
          autoComplete='Price'
          autoFocus
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          {buttonText}
        </Button>
      </Box>
    </Paper>
  );
}
