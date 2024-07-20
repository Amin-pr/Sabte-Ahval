/* eslint-disable react/prop-types */
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ChecklistRtlOutlinedIcon from "@mui/icons-material/ChecklistRtlOutlined";
import { FeedOutlined, HomeRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

import styles from "./RightBar.module.scss";
import { useEffect, useState } from "react";
import UserIcon from "../userIcon/UserIcon";
const drawerWidth = 240;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
// 	({ theme, open }) => ({
// 		flexGrow: 1,
// 		padding: theme.spacing(3),
// 		transition: theme.transitions.create("margin", {
// 			easing: theme.transitions.easing.sharp,
// 			duration: theme.transitions.duration.leavingScreen,
// 		}),
// 		marginRight: -drawerWidth,
// 		...(open && {
// 			transition: theme.transitions.create("margin", {
// 				easing: theme.transitions.easing.easeOut,
// 				duration: theme.transitions.duration.enteringScreen,
// 			}),
// 			marginRight: 0,
// 		}),

// 		position: "relative",
// 	})
// );

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: drawerWidth,
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
	// get access token and name

	const [token, setToken] = useState();
	const [name, setName] = useState();
	const savedToken = localStorage.getItem("accessToken");
	const savedname = localStorage.getItem("name");
	// setToken(savedToken)
	useEffect(() => {
		setToken(savedToken);
		setName(savedname);
	}, [savedToken, savedname]);

	console.log(savedToken, name);
	const theme = useTheme();
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				open={open}
			>
				<Toolbar sx={{ bgcolor: "rgb(0, 103, 16)", height: "4rem" }}>
					<Box
						variant="h6"
						sx={{ flexGrow: 1 }}
						component="div"
					>
						<UserIcon
							userName={name}
							token={token}
						/>
					</Box>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerOpen}
						sx={{ ...(open && { display: "none" }) }}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>

			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						transitionDuration: 500,
					},
				}}
				transitionDuration={500}
				variant="persistent"
				anchor="right"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</DrawerHeader>

				<Divider
					textAlign="right"
					className={styles.Divider}
				></Divider>
				<List>
					<Link
						to="/dashboard"
						relative="path"
					>
						<ListItem
							disablePadding
							className="listItem"
						>
							<ListItemButton className={styles.listItem}>
								<p> خانه </p>
								<ListItemIcon>
									<HomeRounded />
								</ListItemIcon>
							</ListItemButton>
						</ListItem>
					</Link>
				</List>

				<Divider
					textAlign="right"
					className={styles.Divider}
				>
					دفاتر
				</Divider>
				<List>
					<Link
						to="table"
						relative="path"
					>
						<ListItem
							disablePadding
							className="listItem"
						>
							<ListItemButton className={styles.listItem}>
								<p>اطلاعات دفاتر</p>
								<ListItemIcon>
									<FeedOutlined />
								</ListItemIcon>
							</ListItemButton>
						</ListItem>
					</Link>
					<ListItem disablePadding>
						<ListItemButton className={styles.listItem}>
							<p>سوابق دفاتر</p>
							<ListItemIcon>
								<FeedOutlined />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton className={styles.listItem}>
							<p>نتایج نظرسنجی</p>
							<ListItemIcon>
								<FeedOutlined />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
				</List>
				<Divider
					textAlign="right"
					className={styles.Divider}
				>
					مالی
				</Divider>
				<List>
					<ListItem disablePadding>
						<ListItemButton className={styles.listItem}>
							<p>لیست تعرفه ها</p>
							<ListItemIcon>
								<ChecklistRtlOutlinedIcon />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
				</List>
				<Divider
					textAlign="right"
					className={styles.Divider}
				>
					کاربران
				</Divider>
				<List>
					<Link
						to="/user managment"
						relative="path"
					>
						<ListItem disablePadding>
							<ListItemButton className={styles.listItem}>
								<p>مدیریت کاربران</p>
								<ListItemIcon>
									<ChecklistRtlOutlinedIcon />
								</ListItemIcon>
							</ListItemButton>
						</ListItem>
					</Link>
				</List>
			</Drawer>
		</Box>
	);
}
