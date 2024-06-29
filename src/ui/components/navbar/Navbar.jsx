import styles from "./Navbar.module.scss";
import Icon from "../icon/Icon";
import User from "../user/User";
function Navbar() {
	return (
		<div className={styles.navbar}>
			<User></User>
			<div>
				<Icon />
			</div>
		</div>
	);
}

export default Navbar;
