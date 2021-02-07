import React from "react";

const styles = {
	foot: {
		fontColor: "white"
	},
	background: {
		backgroundColor: "navy"
	}
}

const Footer = () => (
	<footer style= {styles.background} className="page-footer">
		<div className="container-fluid text-center">
			<h2 style={styles.foot} >Google Books</h2>
		</div>	
	</footer>
);

export default Footer;