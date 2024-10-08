import ListTableItem from '../elements/ListTableItem';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { observer } from 'mobx-react-lite';
import { brigadeStore, customerStore } from '../../store';
import SearchBox from '../elements/Search';
import React, { useState } from 'react';
import { IFilterCustomer } from '../../types/customer';
import ListTableItemBrigade from '../elements/ListTableItemBrigade';

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
              {/* 
                Сделал все на скорую руку к сожалению. В работе я бы такое решение не сдалал бы, во первых структура 
                должна быть другая и с правильным запросом к базе можно было получить все в одной таблице. 
                И тут я просто развернул массив чтобы новые записи появлялись сверху, 
                правельнее будет сортировать по времени добавления (taimstamp);
              */}
              {
                brigadeStore.brigade.map(br => {
                  const costomers = customerStore.getDataByBrigade(br.id)?.map((item, index) => {
                    return item;
                  })
                  if(!costomers.length) return;
                  return (
                    <ListTableItemBrigade data={costomers} brigade={br}/>
                  )
                })
              }
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