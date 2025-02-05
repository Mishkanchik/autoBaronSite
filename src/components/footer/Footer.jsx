import { Box, Typography } from "@mui/material";

export default function Footer() {
	return (
		<Box
			component='footer'
			sx={{
				backgroundColor: "#18122B",
				color: "white",
				textAlign: "center",
				padding: "20px",
				borderTop: "2px solid #393053",
			}}>
			<Typography variant='body1'>&copy; 2025 Автомобільний каталог</Typography>
			<Typography variant='body2' sx={{ marginTop: "8px" }}>
				Контакти: example@email.comㅤ|ㅤ+38 (099) 999-99-99ㅤ|ㅤ
				<a href='https://mishkanchik.github.io/Link/'>
					https://mishkanchik/Link/
				</a>
			</Typography>
		</Box>
	);
}
