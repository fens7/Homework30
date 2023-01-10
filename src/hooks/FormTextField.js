import TextField from "@mui/material/TextField";

export default function FormTextField(props) {
    const {
        margin,
        label,
        input,
        meta,
    } = props;

    return (
        <TextField
            {...input}
            // name={input.name}
            // type={input.type}
            // onChange={input.onChange}
            // value={input.value}
            margin={margin}
            error={Boolean(meta.error && meta.touched)}
            label={label}
            helperText={meta.error && meta.touched ? meta.error : null}
        />
    )
}
