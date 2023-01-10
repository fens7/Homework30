import React from 'react';
import { Form, Field } from 'react-final-form';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Paper } from '@mui/material';
import FormTextField from './FormTextField';

function SearchBar() {
    function onSubmit(formValue, form) {
        console.log(formValue);
        form.reset();
    }

    // const req = (value) => Boolean(value) ? undefined : 'Ви нічого не знайдете!';

    return (
        <Form
            onSubmit={onSubmit}
            render={(formProps) => {
                const { handleSubmit, pristine } = formProps;
                return (
                    <Paper
                        component='form'
                        onSubmit={handleSubmit}
                        sx={{
                            margin: '50% auto',
                            p: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            width: 400,
                            boxShadow: 'none',
                            position: 'relative',
                        }}
                    >
                        <Field
                            component={FormTextField}
                            // validate={req}
                            name='search'
                            label='Search'
                            type='text'
                            autoComplete='off'
                            placeholder='Search...'
                        />

                        <IconButton
                            type='submit'
                            disabled={pristine}
                            sx={{
                                p: '10px',
                                color: 'black',
                                position: 'absolute',
                                right: '0',
                                top: '10px',
                                marginRight: '5px',
                            }}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                );
            }}
        ></Form>
    );
}

export default SearchBar;
