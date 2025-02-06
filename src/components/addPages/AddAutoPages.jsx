import {
	Box,
	Fab,
	TextField,
	Button,
	Modal,
	Typography,
	FormControl,
	FormLabel,
	Input,
	Container,
	Card,
	CardContent,
	CardMedia,
	Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddAuto = () => {
	const [showForm, setShowForm] = useState(false);
	const [images, setImages] = useState([]);

	const cars = JSON.parse(localStorage.getItem("cars")) || [];
	const parsedCars = Array.isArray(cars) ? cars : [];

	const validationSchema = Yup.object({
		name: Yup.string().required("Назва обов'язкова"),
		manufacturer: Yup.string().required("Виробник обов'язковий"),
		year: Yup.number()
			.min(1886, "Некоректний рік")
			.max(new Date().getFullYear(), "Некоректний рік")
			.required("Рік випуску обов'язковий"),
		volume: Yup.string().required("Об'єм обов'язковий"),
		price: Yup.number().min(1, "Некоректна ціна").required("Ціна обов'язкова"),
		color: Yup.string().required("Колір обов'язковий"),
		description: Yup.string().required("Опис обов'язковий"),
		images: Yup.array()
			.min(1, "Додайте хоча б одне зображення")
			.required("Зображення обов'язкове"),
	});

	const formik = useFormik({
		initialValues: {
			name: "",
			manufacturer: "",
			year: "",
			volume: "",
			price: "",
			color: "",
			description: "",
			images: [],
		},
		validationSchema,
		onSubmit: (values) => {
			const updatedCars = [
				...parsedCars,
				{ ...values, id: parsedCars.length + 1, images },
			];
			localStorage.setItem("cars", JSON.stringify(updatedCars));
			alert("Автомобіль додано!");
			setShowForm(false);
			formik.resetForm();
			setImages([]);
		},
	});

	const handleImageUpload = (event) => {
		const files = Array.from(event.target.files);
		const imageUrls = files.map((file) => URL.createObjectURL(file));
		setImages([...images, ...imageUrls]);
		formik.setFieldValue("images", [...images, ...imageUrls]);
	};

	return (
		<Box sx={{ bgcolor: "#393053", minHeight: "100vh", p: 3 }}>
			<Container>
				<Grid container spacing={3}>
					{parsedCars.map((car) => (
						<Grid item xs={12} sm={6} md={4} key={car.id}>
							<Card>
								{car.images.length > 0 && (
									<CardMedia
										component='img'
										height='140'
										image={car.images[0]}
										alt={car.name}
									/>
								)}
								<CardContent>
									<Typography variant='h6'>{car.name}</Typography>
									<Typography variant='body2' color='textSecondary'>
										{car.manufacturer} - {car.year}
									</Typography>
									<Typography variant='body1'>Ціна: ${car.price}</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
				<Modal open={showForm} onClose={() => setShowForm(false)}>
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							bgcolor: "#393053",
							p: 3,
							borderRadius: 2,
							width: 800,
						}}>
						<Typography variant='h6' align='center' gutterBottom>
							Додати автомобіль
						</Typography>
						<Box component='form' onSubmit={formik.handleSubmit}>
							{Object.keys(formik.initialValues).map(
								(field) =>
									field !== "images" && (
										<FormControl key={field} fullWidth>
											<FormLabel htmlFor={field}>{field}</FormLabel>
											<TextField
												id={field}
												name={field}
												value={formik.values[field]}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												error={
													formik.touched[field] && Boolean(formik.errors[field])
												}
												helperText={
													formik.touched[field] && formik.errors[field]
												}
											/>
										</FormControl>
									)
							)}
							<FormControl fullWidth margin='normal'>
								<FormLabel>Зображення</FormLabel>
								<Input type='file' multiple onChange={handleImageUpload} />
								{formik.errors.images && (
									<Typography color='error'>{formik.errors.images}</Typography>
								)}
							</FormControl>
							<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
								{images.map((img, index) => (
									<img
										key={index}
										src={img}
										alt={`uploaded-${index}`}
										width={100}
										height={100}
									/>
								))}
							</Box>
							<Button
								type='submit'
								variant='contained'
								color='secondary'
								fullWidth
								sx={{ mt: 2 }}>
								Додати автомобіль
							</Button>
						</Box>
					</Box>
				</Modal>
				<Fab
					color='secondary'
					aria-label='add'
					sx={{ position: "fixed", bottom: 16, right: 16 }}
					onClick={() => setShowForm(true)}>
					<AddIcon />
				</Fab>
			</Container>
		</Box>
	);
};

export default AddAuto;
