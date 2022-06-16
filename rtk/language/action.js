import languageActions from 'rtk/language'

const mapDispatchToProps = () => {
	return {
		...languageActions.actions,
	}
}

export default mapDispatchToProps
