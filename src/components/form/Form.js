import { TextField, Button, Typography, Paper } from '@mui/material'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createNewPost } from '../../reducers/postSlice';
import { useState } from 'react';

const Form = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

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
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
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
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) => setFormState({ ...formState, selectedFile: base64 })}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
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
  );
};

export default Form;