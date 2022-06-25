import Link from 'next/link'
import { Box, Container, Typography } from '@mui/material'

import { infoLinks } from './data'
import { useTranslation } from 'next-i18next'

const Footer = () => {
	const { t } = useTranslation()

	return (
		<>
			<Box
				sx={{
					textAlign: 'center',
					backgroundColor: '#003056',
					py: 5,
				}}
			>
				<Container>
					<Typography sx={{ color: '#fff', fontWeight: 400, fontSize: { xs: 14, sm: 16, md: 16, lg: 18 } }}>
						{t('common:footer_copyright')}
					</Typography>
					<Box sx={{ display: { xs: 'block', sm: 'flex' }, justifyContent: 'center', mt: 1 }}>
						{infoLinks.map((link, index) => (
							<Link key={index} href={link.to} passHref>
								<Typography
									sx={{
										color: '#fff',
										fontWeight: 400,
										mx: { xs: 0, sm: 1 },
										mt: { xs: 1, sm: 0 },
										fontSize: { xs: 14, sm: 16, md: 16, lg: 18 },
										'&:hover': {
											cursor: 'pointer',
											color: '#b5b5b5',
										},
									}}
								>
									{t(`common:footer_links_${index + 1}`)}
								</Typography>
							</Link>
						))}
					</Box>
				</Container>
			</Box>
		</>
	)
}

export default Footer
