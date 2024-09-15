import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';


function MyCheckbox({
    value,
    onChange,
    attr,
    label,
    id
}: {
    value: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, options: any) => void;
    attr: string;
    label: string;
    id: any;
}) {
    return ( 
        <FormControlLabel control={<Checkbox id={id} value={value} name={attr} onChange={(e) => {
            onChange(e, {
                value: id
            })
        }}/>} label={label} checked={value} />
     );
}

export default MyCheckbox;