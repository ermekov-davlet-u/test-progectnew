import {
	Link
} from "react-router-dom";
import Header from "./Header";

function PageWrapper({ children }: {
	children: any
}) {
	return (
		<>
			<main className="main-wrapper" >
				<Header />
				<div className="route">
					<div className="route_names">
						<div className="route_name">
							<Link to={`/`} className="route_name_text">
								Главная страница
							</Link>
						</div>
						<div className="route_name">
							<Link to={`customer`} className="route_name_text">
								Добавить сотрудника
							</Link>
						</div>
					</div>
				</div>
				<div className="content">
					{
						children
					}
				</div>
			</main>
		</>
	);
}

export default PageWrapper;