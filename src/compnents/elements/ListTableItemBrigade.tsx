import "./element.css";
import { FiEdit3 } from "react-icons/fi";
import Switch from '@mui/material/Switch';
import { ICustomer } from "../../types/customer";
import { customerStore } from "../../store";
import { observer } from "mobx-react-lite";
import { IBrigade } from "../../types";
import { brigadeStore } from './../../store/brigade';
const label = { inputProps: { 'aria-label': 'Switch demo' } };


function ListTableItemBrigade({ data, brigade }: { data: ICustomer[], brigade: IBrigade }) {
	return (
		<>
			<div className="listitem" style={{ opacity: brigade.disabled ? .8 : 1 }}>
				<div className="listitem_container">
					<div className="listitem-elem">
						<img src={""} alt="" className="listitem-img" />
						<div className="listitem-text">
							{
								data.map(el => {
									return el.name + " "
								})
							}
						</div>
					</div>
					<div className="listitem-elem">
						<div className="listitem-text">
							{
								brigade.name
							}
						</div>
					</div>
					<div className="listitem-elem">
						<Switch {...label} checked={!brigade.disabled} onChange={(e) => {
							brigadeStore.update({ ...brigade, disabled: !e.target.checked })
						}} />
						<FiEdit3 />
					</div>
				</div>
			</div>
		</>
	);
}

export default observer(ListTableItemBrigade);