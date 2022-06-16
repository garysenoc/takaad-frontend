import PropTypes from 'prop-types'

import Navbar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'

export const DefaultLayout = (props) => {
	return (
		<>
			<Navbar />
			{props.children}
			<Footer />
		</>
	)
}

DefaultLayout.propTypes = {
	children: PropTypes.object.isRequired,
}
