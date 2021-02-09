import React from "react";

const styles = {
	foot: {
		textAlign: "center",
		backgroundColor: "navy",
		marginTop: "10rem",
		paddingTop: "2%",
		color: "white",
		position: "fixed",
		left: "0",
		bottom: "0",
		width: "100%",

	}
}

const Footer = () => (
	<footer style={styles.foot} className="page-footer">
		<div className="container-fluid text-center">
			<h4 style={styles.foot} >Google Books</h4>
		</div>
	</footer>
);

export default Footer;