export const hsgReportBrokenLinkConfig = {
	reportEndpoint: 'https://prod-132.westeurope.logic.azure.com:443/workflows/eb4b8ea670a54e838c514ac0a6a76cdb/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=XtWYbw3Qo-ul4TVMIhHw51ak9D84T9eJNdqEj1m-P0Q',
	labels: {
		linkText: {
			de: 'Ungültigen Link melden',
			en: 'Report broken link'
		},
		popupTitle: {
			de: 'Folgende Daten werden übermittelt.',
			en: 'The following information will be sent.'
		},
		okLabel: {
			de: 'Senden',
			en: 'Send'
		},
		cancelLabel: {
			de: 'Abbrechen',
			en: 'Cancel'
		},
		commentLabel: {
			de: 'Kommentar/Kontakt-Email (optional)',
			en: 'Comment/Contact-Email (optional)'
		},
		errorMessage: {
			de: 'Fehler beim Senden des Reports.',
			en: 'Error sending report.'
		}
	}
}