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

            if(this.$location.$$path.indexOf('openurl')>-1){
                this.openurl = true;
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