import { useState } from "react"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { observer } from "mobx-react-lite";
import { brigadetore, customerStore, postStore } from "../../store";
import Button from '@mui/material/Button';
import { ICustomer } from '../../types/customer';
import Texteditor from "../ui/Texteditor";
import MyCheckbox from "../ui/Checkbox";
import UploadPhoto from "../elements/UploadPhoto";
import PageWrapper from "./Pagewrapper";

function AddUser() {

  const [customer, setCustomer] = useState<ICustomer>({
    id: "",
    surname: "",
    name: "",
    post: postStore.posts[0]
  })

  function onChangeCheckbox(e: React.ChangeEvent<HTMLInputElement>, { value }: any) {
    if (!e.target.checked) value = null
    setCustomer((st: ICustomer) => {
      return {
        ...st,
        [e.target.name]: value
      }
    })
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCustomer((st: ICustomer) => {
      return {
        ...st,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <>

      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{
          bgcolor: '#fff',
          height: '80vh',
          borderRadius: 8,
          padding: "24px",
          // border: '1px solid #ccc'
          boxShadow: "2px 2px 7px #ccc"
        }} >
          <div style={{
            display: "flex",
            gap: 12
          }}>
            <div>
              <UploadPhoto attr="image" onChange={onChange} />
            </div>
            <div style={{
              display: "flex",
              flexDirection: 'column',
              gap: 16
            }}>
              <Texteditor
                label="Фамилия"
                attr="surname"
                value={customer.surname}
                onChange={onChange}
              />
              <Texteditor
                label="Имя"
                attr="name"
                value={customer.name}
                onChange={onChange}
              />
              <Texteditor
                label="Отчество"
                attr="patronimic"
                value={customer.patronimic}
                onChange={onChange}
              />
              <p>
                Должность
              </p>
              <FormGroup>
                {
                  postStore.posts.map(post => {
                    return <MyCheckbox onChange={onChangeCheckbox}
                      value={post.id == customer.post?.id}
                      attr={'post'}
                      label={post.name}
                      id={post} />
                  })
                }
              </FormGroup>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="">Объединить в бригаду </label>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    placeholder="Объединить в бригаду"
                    size="small"
                    disabled={customer.post?.id != 3}
                  >
                    {
                      brigadetore.brigade.map(brig => {
                        return (<MenuItem value={brig.id}>{brig.name}</MenuItem>)
                      })
                    }
                  </Select>
                </FormControl>
              </div>
              <Button variant="contained" disabled={!customer.name || !customer.surname || !customer.post} onClick={() => {
                if(
                  !customer.name || !customer.surname || !customer.post 
                )
                customerStore.add(customer)
              }}>Добавить</Button>
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
}

export default observer(AddUser);