import { AppBar, Toolbar } from "@mui/material";

import logo from "./logo.png";

export default function Header() {
	return (
		<AppBar
			position='static'
			sx={{
				backgroundColor: "#18122B",
				boxShadow: "none",
				borderBottom: "2px solid #393053",
			}}>
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "space-between",
					padding: "10px 20px",
				}}>
				<img src={logo} alt='Лого' style={{ height: "40px" }} />
			</Toolbar>
		</AppBar>
	);
}
