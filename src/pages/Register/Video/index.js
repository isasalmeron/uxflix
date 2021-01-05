// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// import Box from '@material-ui/core/Box';
// import { Typography } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';

// import useForm from '../../../hooks/useForm';
// import PageDefault from '../../../components/PageDefault';
// import Field from '../../../components/Field';
// import { PrimaryButton } from '../../../components/Buttons';
// import videosApi from '../../../api/videos';
// import categoriesApi from '../../../api/categories';

// function RegisterVideo() {
//   const history = useHistory();

//   const initialVideo = {
//     title: '',
//     description: '',
//     url: '',
//     category: '',
//   };
//   const { values, handleOnChange } = useForm(initialVideo);
//   const [categories, setCategories] = useState([]);
//   const categoriesTitle = categories.map(({ name }) => name);
//   const handleSubmitForm = (event) => {
//     event.preventDefault();

//     const actualCategory = categories.find((category) => (
//       category.name === values.category
//     ));

//     videosApi.addVideo({
//       title: values.title,
//       url: values.url,
//       categoryId: actualCategory.id,
//     }).then(() => {
//       history.push('/');
//     });
//   };

//   useEffect(() => {
//     categoriesApi.getAll().then((allCategories) => {
//       setCategories(allCategories);
//     });
//   }, []);

//   return (
//     <PageDefault>
//       <Box px={{ xs: 2, md: 3 }} py={3} color="white">
//         <Box pb={1}>
//           <Typography variant="h4">
//             Novo vídeo
//           </Typography>
//         </Box>
//         <form onSubmit={handleSubmitForm}>
//           <TextField
//             id="outlined-secondary"
//             label="Título"
//             variant="outlined"
//             value={values.title}
//             // onChange={handleOnChange}
//             fullWidth
//             color="secondary"
//           />
//           <Field
//             label="Título"
//             name="title"
//             value={values.title}
//             onChange={handleOnChange}
//           />
//           <Field
//             label="URL"
//             name="url"
//             value={values.url}
//             onChange={handleOnChange}
//           />
//           <Field
//             label="Categoria"
//             name="category"
//             value={values.category}
//             onChange={handleOnChange}
//             suggestions={categoriesTitle}
//           />
//           <Box p={2}>
//             <PrimaryButton type="submit">
//               Cadastrar
//             </PrimaryButton>
//           </Box>
//         </form>
//       </Box>
//     </PageDefault>
//   );
// }

// export default RegisterVideo;

import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import PageDefault from '../../../components/PageDefault';
import categoriesApi from '../../../api/categories';

export const Wrapper = withStyles({
  root: {
    color: 'white',
    borderColor: 'red',
  },
})(TextField);

const filter = createFilterOptions();

export default function FreeSoloCreateOptionDialog() {
  const [value, setValue] = useState(null);
  const [open, toggleOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [dialogValue, setDialogValue] = useState({
    title: '',
    year: '',
  });

  useEffect(() => {
    categoriesApi.getAll().then((allCategories) => {
      setCategories(allCategories);
    });
  }, []);

  const handleClose = () => {
    setDialogValue({
      title: '',
      year: '',
    });

    toggleOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      title: dialogValue.title,
      year: parseInt(dialogValue.year, 10),
    });

    handleClose();
  };

  return (
    <PageDefault>
      <Box px={{ xs: 2, md: 3 }} py={3} color="white">
        <Box pb={1}>
          <Typography variant="h4">
            Novo vídeo
          </Typography>
        </Box>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            if (typeof newValue === 'string') {
              // timeout to avoid instant validation of the dialog's form.
              setTimeout(() => {
                toggleOpen(true);
                setDialogValue({
                  title: newValue,
                  year: '',
                });
              });
            } else if (newValue && newValue.inputValue) {
              toggleOpen(true);
              setDialogValue({
                title: newValue.inputValue,
                year: '',
              });
            } else {
              setValue(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            if (params.inputValue !== '') {
              filtered.push({
                inputValue: params.inputValue,
                name: `Adicionar categoria "${params.inputValue}"`,
              });
            }

            return filtered;
          }}
          id="free-solo-dialog-demo"
          options={categories}
          getOptionLabel={(option) => {
            if (typeof option === 'string') {
              return option;
            }
            if (option.inputValue) {
              return option.inputValue;
            }
            return option.name;
          }}
          selectOnFocus
          style={{ color: 'secondary', background: 'secondary' }}
          clearOnBlur
          handleHomeEndKeys
          renderOption={(option) => option.name}
          freeSolo
          fullWidth
          required
          renderInput={(params) => (
            <Wrapper {...params} label="Categoria" variant="outlined" />
          )}
        />
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Add a new film</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Did you miss any film in our list? Please, add it!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.title}
              onChange={(event) => setDialogValue({ ...dialogValue, title: event.target.value })}
              label="title"
              type="text"
            />
            <TextField
              margin="dense"
              id="name"
              value={dialogValue.year}
              onChange={(event) => setDialogValue({ ...dialogValue, year: event.target.value })}
              label="year"
              type="number"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      </Box>
    </PageDefault>
  );
}
