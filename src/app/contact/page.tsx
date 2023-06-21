'use client'

import { useState } from 'react';
import { TextField, Button } from '@mui/material';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        fullWidth
      />
      <TextField
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        fullWidth
      />
      <TextField
        label="Message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        fullWidth
        multiline
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
