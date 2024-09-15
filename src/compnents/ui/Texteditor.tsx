import TextField from '@mui/material/TextField';

function Texteditor({
    label,
    onChange,
    attr,
    value
}: {
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    attr: string,
    value: unknown
}) {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <label htmlFor="">{label} </label>
                <TextField
                    value={value}
                    name={attr}
                    onChange={onChange}
                    id="attr"
                    placeholder="Фамилия"
                    variant="outlined"
                    size='small' />
            </div>
        </>
    );
}

export default Texteditor;