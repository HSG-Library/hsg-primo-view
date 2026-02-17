export class hsgOpenurlInterlibraryController {

    constructor($location, hsgTranslatorService, hsgOpenurlInterlibraryConfig) {
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

        if (this.$location.$$path.indexOf('openurl') > -1) {
            let search = this.$location.$$search;
            console.log('search: ', search);
            this.openurl = true;

            if (search['issn']) {
                this.issn = search['issn'];
                console.log('issn: ', this.issn);
            }
            else if (search['rft.issn']) {
                this.issn = search['rft.issn'];
                console.log('issn: ', this.issn);
            }
            if (search['isbn']) {
                this.isbn = search['isbn'];
                console.log('isbn: ', this.isbn);
            }
            else if (search['rft.isbn']) {
                this.isbn = search['rft.isbn'];
                console.log('isbn: ', this.isbn);
            }
        }
    }

    isBookorUnknown() {
        return this.isbn || (!this.issn && !this.isbn);
    }

    isArticleorUnkown() {
        return this.issn || (!this.issn && !this.isbn);
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