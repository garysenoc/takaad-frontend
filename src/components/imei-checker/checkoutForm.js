import { connect } from 'react-redux'
import { Grid, MenuItem, TextField } from '@mui/material'

import mapCheckoutStateToProps from 'rtk/checkout/state'
import mapCheckoutDispatchToProps from 'rtk/checkout/action'
import { useTranslation } from 'next-i18next'

const CheckoutForm = (props) => {
	const { t } = useTranslation()
	return (
		<>
			<Grid container justifyContent="center">
				<Grid item xs={12} sm={6} md={6} sx={{ paddingRight: { sm: 1, md: 1 } }}>
					<TextField
						fullWidth
						placeholder={t('imei-checker:fname')} 
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 400,
							color: '#a1adb2',
							height: '45px',
							borderRadius: '5px',
						}}
						value={props.checkout.billing_details.first_name}
						onChange={(e) => props.setBillingDetails({ field: 'first_name', value: e.target.value })}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={6} sx={{ marginTop: { xs: 3, sm: 0 }, paddingLeft: { sm: 1, md: 1 } }}>
					<TextField
						fullWidth
						placeholder={t('imei-checker:fname')} 
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 400,
							color: '#a1adb2',
							height: '45px',
							borderRadius: '5px',
						}}
						value={props.checkout.billing_details.last_name}
						onChange={(e) => props.setBillingDetails({ field: 'last_name', value: e.target.value })}
					/>
				</Grid>
				<Grid item xs={12} mt={3}>
					<TextField
						fullWidth
						id="outlined-select-currency"
						select
						label={t('imei-checker:country')} 
						value={props.checkout.billing_details.country}
						onChange={(e) => props.setBillingDetails({ field: 'country', value: e.target.value })}
					>
						<MenuItem value="US">United States</MenuItem>
						<MenuItem value="PH">Philippines</MenuItem>
						<MenuItem value="SG">Singapore</MenuItem>
					</TextField>
				</Grid>
				<Grid item xs={12} mt={2}>
					<TextField
						fullWidth
						placeholder={t('imei-checker:houseNo')} 
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 400,
							color: '#a1adb2',
							height: '45px',
							borderRadius: '5px',
						}}
						value={props.checkout.billing_details.line1}
						onChange={(e) => props.setBillingDetails({ field: 'line1', value: e.target.value })}
					/>
				</Grid>
				<Grid item xs={12} mt={3}>
					<TextField
						fullWidth
						placeholder={t('imei-checker:apartment')} 
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 400,
							color: '#a1adb2',
							height: '45px',
							borderRadius: '5px',
						}}
						value={props.checkout.billing_details.line2}
						onChange={(e) => props.setBillingDetails({ field: 'line2', value: e.target.value })}
					/>
				</Grid>
				<Grid item xs={12} mt={3}>
					<TextField
						fullWidth
						placeholder={t('imei-checker:city')} 
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 400,
							color: '#a1adb2',
							height: '45px',
							borderRadius: '5px',
						}}
						value={props.checkout.billing_details.city}
						onChange={(e) => props.setBillingDetails({ field: 'city', value: e.target.value })}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={6} sx={{ paddingRight: { sm: 1, md: 1 } }} mt={3}>
					<TextField
						fullWidth
						id="outlined-select-currency"
						select
						label={t('imei-checker:state')} 
						value={props.checkout.billing_details.state}
						onChange={(e) => props.setBillingDetails({ field: 'state', value: e.target.value })}
					>
						<MenuItem value="Pennsylvania">Pennsylvania</MenuItem>
						<MenuItem value="Oregon">Oregon</MenuItem>
						<MenuItem value="Oklahoma">Oklahoma</MenuItem>
					</TextField>
				</Grid>
				<Grid item xs={12} sm={6} md={6} sx={{ marginTop: { xs: 2, sm: 3 }, paddingLeft: { sm: 1, md: 1 } }}>
					<TextField
						fullWidth
						placeholder={t('imei-checker:zip')} 
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 400,
							color: '#a1adb2',
							height: '45px',
							borderRadius: '5px',
						}}
						value={props.checkout.billing_details.zipcode}
						onChange={(e) => props.setBillingDetails({ field: 'zipcode', value: e.target.value })}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={6} sx={{ paddingRight: { sm: 1, md: 1 } }} mt={3}>
					<TextField
						fullWidth
						placeholder={t('imei-checker:phone')} 
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 400,
							color: '#a1adb2',
							height: '45px',
							borderRadius: '5px',
						}}
						value={props.checkout.billing_details.phone_number}
						onChange={(e) => props.setBillingDetails({ field: 'phone_number', value: e.target.value })}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={6} sx={{ paddingLeft: { sm: 1, md: 1 } }} mt={3}>
					<TextField
						fullWidth
						placeholder={t('imei-checker:email')} 
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 400,
							color: '#a1adb2',
							height: '45px',
							borderRadius: '5px',
						}}
						value={props.checkout.billing_details.email_address}
						onChange={(e) => props.setBillingDetails({ field: 'email_address', value: e.target.value })}
					/>
				</Grid>
				{/* <Grid item xs={12} mt={3} px={1}>
					<FormGroup>
						<FormControlLabel control={<CheckBox defaultChecked />} label="Create an account?" />
					</FormGroup>
				</Grid> */}
			</Grid>
		</>
	)
}

export default connect(mapCheckoutStateToProps, mapCheckoutDispatchToProps())(CheckoutForm)
