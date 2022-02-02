export class slspArchivesHtgiController {

	constructor() {
		this.parentCtrl = this.afterCtrl.parentCtrl;
	}

	$onInit() {
		console.log('archives yo');
		if (!this.parentCtrl.item.pnx.display.source || this.parentCtrl.item.pnx.display.source.length === 0) {
			return;
		}
		this.source = this.parentCtrl.item.pnx.display.source[0];
		// CMI STAR sources
		if (this.source === 'ETH_MaxFrischArchiv' || this.source === 'ETH_ThomasMannArchiv') {
			// hide content of htgi section
			let section = document.getElementById('full-view-container');
			section.classList.add('slsp-archives-hide');

			// get guid of CMIStar
			let sourceid = this.parentCtrl.item.pnx.control.originalsourceid[0];
			let guid = sourceid.substring(sourceid.lastIndexOf(':') + 1);

			// different sources: concat url
			if (this.source === 'ETH_ThomasMannArchiv') {
				this.url = 'http://www.online.tma.ethz.ch/home/#/content/' + guid;
				// only for test
				//this.label = 'Detailed information in Thomas Mann-Archiv Online (metadata only)';
			}
			else if (this.source === 'ETH_MaxFrischArchiv') {
				this.url = 'http://maxfrischarchiv-online.ethz.ch/home/#/content/' + guid;
				// only for test
				//this.label = 'Request via Max Frisch-Archiv Online';
			}
		}
	}
}