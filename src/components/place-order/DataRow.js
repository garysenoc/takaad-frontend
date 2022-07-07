import React, { useState } from 'react'
import { Grid, styled, Tooltip, tooltipClasses, Typography } from '@mui/material'
import HelpIcon from '@mui/icons-material/Help'
import Link from 'next/link'
import { iPhoneOrderData } from 'src/components/place-order/data'
import { glosarryInfos } from 'src/components/glosarry/data'

const CustomWidthTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)({
	[`& .${tooltipClasses.tooltip}`]: {
		minWidth: 400,
	},
})

const DataRow = ({ data, index }) => {
	const [open, setOpen] = useState(false)

	const handleTooltipClose = () => setOpen(false)

	const handleTooltipOpen = () => setOpen(true)

	const handleShowValueForTooltip = (label) => {
		const glosarry = glosarryInfos.filter((info) => info.label === label)

		if (glosarry[0]) {
			return glosarry[0].value
		} else {
			return 'There is no description for this field at the moment. Please check again later!'
		}
	}

	return (
		<Grid
			container
			sx={{
				borderBottom: index + 1 !== iPhoneOrderData.length ? '1px solid #c4c4c4' : 'unset',
				p: 1,
			}}
		>
			<Grid item xs={6}>
				<Typography
					sx={{
						fontFamily: 'Nunito Sans',
						fontWeight: 400,
						color: '#fff',
						display: 'block',
						fontSize: { xs: 12, sm: 14, md: 16 },
					}}
				>
					{data.label}
					<CustomWidthTooltip
						title={
							<>
								<Typography
									sx={{
										fontFamily: 'Nunito Sans',
										fontWeight: 400,
										color: '#fff',
										fontSize: { xs: 12, sm: 14, md: 16 },
									}}
								>
									{handleShowValueForTooltip(data.label)}
								</Typography>
								<Link href="/glosarry" passHref>
									<Typography
										sx={{
											fontFamily: 'Nunito Sans',
											fontWeight: 600,
											mt: 1,
											color: '#fcb100',
											fontSize: { xs: 12, sm: 14, md: 16 },
											'&:hover': {
												cursor: 'pointer',
											},
										}}
										onClick={() => props.setSelectedGlosarry(data.label)}
									>
										{`Click to learn more about the "${data.label}" field`}
									</Typography>
								</Link>
							</>
						}
						placement="top"
						onClose={handleTooltipClose}
						open={open}
						disableFocusListener
						disableTouchListener
						onOpen={handleTooltipOpen}
						onClick={handleTooltipOpen}
					>
						<HelpIcon
							sx={{
								fontSize: { xs: 12, sm: 14, md: 16 },
								color: '#28cd7e',
								ml: 1,
								'&:hover': { cursor: 'pointer' },
							}}
							// onClick={handleTooltipOpen}
						/>
					</CustomWidthTooltip>
				</Typography>
			</Grid>
			<Grid item xs={6}>
				<Typography
					sx={{
						fontFamily: 'Nunito Sans',
						fontWeight: 400,
						color: '#fff',
						display: 'block',
						fontSize: { xs: 12, sm: 14, md: 16 },
					}}
				>
					{data.value}
				</Typography>
			</Grid>
		</Grid>
	)
}

export default DataRow
