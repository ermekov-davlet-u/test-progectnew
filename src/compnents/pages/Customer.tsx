import Adduser from "../common/Adduser";
import ListTable from "../common/ListTable";
import PageWrapper from "../common/Pagewrapper";


function Custompage() {
	return (
		<>
			<PageWrapper>
				<Adduser />
				<ListTable />
			</PageWrapper>
		</>
	);
}

export default Custompage;