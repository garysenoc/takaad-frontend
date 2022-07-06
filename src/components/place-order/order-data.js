import { Box, CircularProgress } from '@mui/material'
import { connect } from 'react-redux'

import mapCheckerStateToProps from 'rtk/checker/state'
import mapCheckerDispatchToProps from 'rtk/checker/action'
import DataSummary from './DataSummary'

const OrderData = (props) => {
	const order_data = props.orders.order_data

	return (
		<>
			<Box sx={{ p: 1, backgroundColor: '#003056', borderRadius: 1 }}>
				{props.common.isLoading ? (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							// background: 'gray',
						}}
					>
						<CircularProgress disableShrink style={{ color: '#ffffff' }} />
						<h1 style={{ margin: 0, color: '#ffffff' }}>Loading Information...</h1>
					</div>
				) : (
					<>
						{order_data &&
							order_data.map((order, i) => {
								return <DataSummary key={i} order={order} order_metadata={props.orders.order_metadata[i]} />
							})}
					</>
				)}
			</Box>
		</>
	)
}

export default connect(mapCheckerStateToProps, mapCheckerDispatchToProps())(OrderData)
