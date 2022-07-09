import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import DisplayOrder from '../../components/order/DisplayOrder'

export async function getServerSideProps(ctx) {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['home', 'contact', 'common'])),
		},
	}
}

const Order = () => {
	const router = useRouter()
	const order = JSON.parse(router.query.order)

	return <DisplayOrder orderData={order} />
}

export default connect((state) => state)(Order)
