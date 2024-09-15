import ListTableItem from '../elements/ListTableItem';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { observer } from 'mobx-react-lite';
import { customerStore } from '../../store';
import SearchBox from '../elements/Search';
import React, { useState } from 'react';
import { IFilterCustomer } from '../../types/customer';

function ListTable() {

  const [filter, setFilter] = useState<IFilterCustomer>({
    name: "",
    surname: "",
    patronimic: ""
  })

  function filterOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilter({
      name: e.target.value
    })
  }
  customerStore.filterData({ name: filter.name })?.map(elem => {
    console.log(elem);

  })
  return (
    <div className="wrapper">
      <SearchBox onChange={filterOnChange} />
      <Container maxWidth="sm" style={{ padding: 0 }}>
        <Box sx={{
          bgcolor: '#fff',
          height: '80vh',
          borderRadius: 8,
          padding: "24px",
          border: '1px solid #ccc',
          boxShadow: "2px 2px 7px #ccc"
        }} >
          <div className="listTable_wrap">
            <div className="listTable">
              {
                filter.name ?
                  customerStore.filterData({ name: filter.name })?.map((item, index) => {
                    return <ListTableItem key={item.id + index} data={item} />
                  })
                  :
                  customerStore.getSortData("desc").map((item, index) => {
                    return <ListTableItem key={item.id + index} data={item} />
                  })
              }
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default observer(ListTable);