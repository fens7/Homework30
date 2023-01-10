import TextField from '@mui/material/TextField';

export default function FormTextField(props) {
    const { label, placeholder, autoComplete, input } = props;

    return (
        <TextField
            variant='standard'
            {...input}
            label={label}
            autoComplete={autoComplete}
            placeholder={placeholder}
            sx={{ ml: 1, flex: 1, color: 'white', border: '3px ' }}
        />
    );
}
