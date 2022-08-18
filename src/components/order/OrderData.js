import { Box, CircularProgress } from '@mui/material'
import { connect } from 'react-redux'

import mapCheckerStateToProps from 'rtk/checker/state'
import mapCheckerDispatchToProps from 'rtk/checker/action'
import OrderTable from './OrderTable'
import { useTranslation } from 'next-i18next'


const OrderData = (props) => {
	const order_data = props.orders.order_data
	const { t } = useTranslation()
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
						<h1 style={{ margin: 0, color: '#ffffff' }}> {t('order:loading')}</h1>
					</div>
				) : (
					<>
						{order_data &&
							order_data.map((order, i) => {
								return <OrderTable key={i} order={order} product={props.orders.order_metadata[i].product} />
							})}
					</>
				)}
			</Box>
		</>
	)
}

export default connect(mapCheckerStateToProps, mapCheckerDispatchToProps())(OrderData)
