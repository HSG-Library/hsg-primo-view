export class hsgOpenurlInterlibraryController {

    constructor( $location, hsgTranslatorService, hsgOpenurlInterlibraryConfig ) {
        this.$location = $location;
        this.translator = hsgTranslatorService;
        this.config = hsgOpenurlInterlibraryConfig;
    }

        $onInit() {

            this.openurl = false;

            if (!this.$location.$$path) {
                console.error("***HSG*** hsgOpenurlInterlibraryController.$onInit: $$path not available");
                return;
            }

            if (this.$location.$$path.indexOf('openurl')>-1){
                let s = this.$location.$$search;
                console.log('s: ', s);
                this.openurl = true;

                if(s['issn'] && s['issn'] != ''){
                    this.issn = s['issn'];
                    console.log('issn: ', this.issn);
                }
                else if(s['rft.issn'] && s['rft.issn'] != ''){
                    this.issn = s['rft.issn'];
                    console.log('issn: ', this.issn);
                }
                if(s['isbn'] && s['isbn'] != ''){
                    this.isbn = s['isbn'];
                    console.log('isbn: ', this.isbn);
                }
                else if(s['rft.isbn'] && s['rft.isbn'] != ''){
                    this.isbn = s['rft.isbn'];
                    console.log('isbn: ', this.isbn);
                }
                
            }
        
    }
 
	translate(key) {
		if (!this.config) {
			console.log("config missing")
			return
		}
		return this.translator.getLabel(key, this.config)
	}    

}

hsgOpenurlInterlibraryController.$inject = ['$location', 'hsgTranslatorService', 'hsgOpenurlInterlibraryConfig'];