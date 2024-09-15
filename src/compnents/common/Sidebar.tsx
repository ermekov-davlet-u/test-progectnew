


function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar_container">
				<div className="sidebar-logo">
					<img src="/logo.png" alt="" className="sidebar-logo_img" />
				</div>

				<div className="sidebar-buttons">
					<button className="sidebar-button">
						<div className="sidebar-button_icon">
							<img src="/sidebar1.png" alt="" className="sidebar-button_icon_img" />
						</div>
					</button>
					<button className="sidebar-button">
						<div className="sidebar-button_icon">
							<img src="/sidebar2.png" alt="" className="sidebar-button_icon_img" />
						</div>
					</button>
					<button className="sidebar-button">
						<div className="sidebar-button_icon">
							<img src="/sidebar3.png" alt="" className="sidebar-button_icon_img" />
						</div>
					</button>
					<button className="sidebar-button">
						<div className="sidebar-button_icon">
							<img src="/sidebar4.png" alt="" className="sidebar-button_icon_img" />
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;