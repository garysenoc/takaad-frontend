import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import DisplayOrder from '../../components/order/DisplayOrder'
import { FormattedDate } from '../../utils/renderFormattedDate'

export async function getServerSideProps(ctx) {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['home', 'contact', 'common'])),
		},
	}
}
const OrderId = () => {
	const router = useRouter()
	const [order, setOrder] = useState(null)

	useEffect(async () => {
		const data = await fetch(`${process.env.api_baseurl}/v1/order/${router.query.id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		if (data.ok) {
			const { date, ...rest } = await data.json()
			const order = { date: FormattedDate(new Date(date)), ...rest }
			setOrder(order)
		}
	}, [])

	return <DisplayOrder orderData={order} />
}

export default connect((state) => state)(OrderId)
