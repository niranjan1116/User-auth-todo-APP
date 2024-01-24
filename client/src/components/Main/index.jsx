import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import TodoList from './TodoList';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>List your dailygoals</h1>
				
				<Link to="/login">
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
				</Link>
			</nav>
			<div><TodoList /></div>
		</div> 
		
	);
};

export default Main;
