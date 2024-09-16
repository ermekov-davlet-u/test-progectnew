import "./element.css";
import { FiEdit3 } from "react-icons/fi";
import Switch from '@mui/material/Switch';
import { ICustomer } from "../../types/customer";
import { customerStore } from "../../store";
import { observer } from "mobx-react-lite";
const label = { inputProps: { 'aria-label': 'Switch demo' } };


function ListTableItem({ data }: { data: ICustomer }) {
	return (
		<>
			<div className="listitem" style={{opacity: data.disabled ? .8 : 1}}>
				<div className="listitem_container">
					<div className="listitem-elem">
						<img src={data.image} alt="" className="listitem-img" />
						<div className="listitem-text">
							{
								data.surname
							}
						</div>
					</div>
					<div className="listitem-elem">
						{
							data.post?.name
						}
					</div>
					<div className="listitem-elem">
						<Switch {...label} checked={!data.disabled} onChange={(e) => {
							customerStore.update({...data, disabled: !e.target.checked})
						}}/>
						<FiEdit3 />
					</div>
				</div>
			</div>
		</>
	);
}

export default observer(ListTableItem);