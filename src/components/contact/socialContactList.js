import { Typography, Box, List, ListItem, CardMedia } from '@mui/material'
import { useTranslation } from 'next-i18next'

const SocialContactList = ({ socialContacts }) => {
	const { t } = useTranslation()

	return (
		<>
			<Box
				sx={{
					backgroundColor: '#0b3e69',
					height: '100%',
					padding: { xs: '20px 15px', sm: '30px 20px', md: '40px 30px', lg: '50px 40px' },
				}}
			>
				<Box sx={{ mb: { xs: '1rem', sm: '1.5rem', md: '1.5rem', lg: '3rem' } }}>
					<Typography
						variant="h2"
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 600,
							color: '#fff',
							fontSize: { xs: '22px', sm: '22px', md: '24px', lg: '27px' },
							lineHeight: { xs: '28px', sm: '28px', md: '30px', lg: '34px' },
						}}
					>
						{t('contact:quick_contact_header')}
					</Typography>
				</Box>
				<List>
					{socialContacts.map((contact, index) => (
						<ListItem
							key={index}
							sx={{
								position: 'relative',
								paddingLeft: '55px',
								marginBottom: { sm: '10px', md: '10px' },
								display: { xs: 'block', sm: 'inline-block', md: 'block' },
								width: { xs: '100%', sm: 'calc(50% - 10px)', md: '100%' },
							}}
						>
							<Box sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
								<CardMedia
									component="img"
									image={`/images/${contact.icon}`}
									sx={{
										width: { xs: '30px', sm: '100%', md: '100%' },
									}}
								/>
							</Box>
							<Box>
								<Typography
									sx={{
										fontFamily: 'Nunito Sans',
										fontWeight: 600,
										color: '#fff',
										fontSize: { xs: '14px', sm: '16px', md: '18px' },
										lineHeight: { xs: '20px', sm: '22px', md: '24px' },
									}}
								>
									{t(`contact:quick_contact_header_${index + 1}`)}
								</Typography>
								<Typography
									sx={{
										fontFamily: 'Nunito Sans',
										fontWeight: 400,
										color: '#ccdbeb',
										wordBreak: 'break-all',
										width: '100%',
										display: 'inline-block',
										fontSize: { xs: '14px', sm: '16px', md: '18px' },
										lineHeight: { xs: '20px', sm: '22px', md: '24px' },
									}}
								>
									{t(`contact:quick_contact_body_${index + 1}`)}
								</Typography>
							</Box>
						</ListItem>
					))}
				</List>
			</Box>
		</>
	)
}

export default SocialContactList
