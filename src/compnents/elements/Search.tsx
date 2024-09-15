import { CiSearch } from "react-icons/ci";
import TextField from '@mui/material/TextField';

function SearchBox({onChange}: {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<>
			<div className="search-box">
				<div className="search-box_container">
					<div className="search-box_right">
						<div className="search-box_icon">
							<CiSearch />
						</div>
						<input className="search-box_input" placeholder="Поиск сотрудника" onChange={onChange} />
					</div>
					<div className="search-box_icon">
						<img src="/filterIcon.png" alt="" className="search-box_icon_img" />
					</div>
				</div>
			</div>
		</>
	);
}

export default SearchBox;