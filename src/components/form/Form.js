import React from 'react'
import { styled } from '@mui/material/styles';
import { Paper, Typography, TextField, Button} from '@mui/material';
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { createNewPost } from '../../reducers/postSlice';

const AppStyles = styled('div')(({ theme }) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));


const Form = () => {

  const dispatch = useDispatch();

  // Use useState to manage the form data for the clear button
  const [formState, setFormState] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewPost(formState)); // Dispatch createNewPost with formState as the payload
  };

  const handleClear = () => {
    // Use the useState setFormState function to clear the form data
    setFormState({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className={AppStyles.paper}>
      <form autoComplete='off' noValidate className={`${AppStyles.root} ${AppStyles.form}`} onSubmit={handleSubmit} > 
        <Typography variant='h6'>Creating a memory</Typography>
        <TextField
          name="creator"
          variant='outlined'
          label="Creator"
          fullWidth
          value={formState.creator}
          onChange={(e) => setFormState({ ...formState, creator: e.target.value })}
        />
        <TextField
          name="title"
          variant='outlined'
          label="Title"
          fullWidth
          value={formState.title}
          onChange={(e) => setFormState({ ...formState, title: e.target.value })}
        />
        <TextField
          name="message"
          variant='outlined'
          label="Message"
          fullWidth
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
        />
        <TextField
          name="tags"
          variant='outlined'
          label="Tags"
          fullWidth
          value={formState.tags}
          onChange={(e) => setFormState({ ...formState, tags: e.target.value })}
        />
        <div className={AppStyles.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) => setFormState({ ...formState, selectedFile: base64 })}
          />
        </div>
        <Button
          className={AppStyles.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
        >
          Submit
        </Button>
        {/* Add the Clear button using useState */}
        <Button
          variant='contained'
          color='secondary'
          size='small'
          onClick={handleClear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  )
}

export default Form