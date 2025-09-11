# HSGswisscovery Customization Package
## How to use
For development and building/package creation, the [ExLibris Primo DevEnv](https://github.com/ExLibrisGroup/primo-explore-devenv) must be used.

A quick A short guide on how to install the dev environment can be found in the HSG-BI Teamspace: https://teamspace.unisg.ch/verw/bi/wiki/Seiten/Primo%20lokale%20Entwicklungsumgebung.aspx 

### Development
* Clone this repository into the 'primo-explore/custom' directory of the Primo DevEnv and name the new directory after the target view. E.g. (note, that the colon is replaced by a dash):

		git clone git@github.com:HSG-Library/hsg-primo-view.git 41SLSP_HSG-HSGswisscovery		
* Make changes
* To run the current state of development use the following gulp task in the root directory of the Primo DevEnv:

		gulp run --view 41SLSP_HSG-sandbox_jfu --browserify --ve
	* `--view`: the name of the view which should be run
	* `--browserify`: lets you require('modules') in the browser by bundling up all of your dependencies
	* `--ve`: the Primo DevEnv documentation states 'For Primo VE customers, add the --ve flag', but I could not notice any effects.
* Go to 'http://localhost:8003/discovery/search?vid=41SLSP_HSG:HSGswisscovery' to test your changes locally (change the view name accordingly).
* Commit and push the changes

### Build/Create Package
* Run the following task in the root directory of the Primo DevEnv:

		gulp create-package --browserify --ve
* Choose the view you want to build
* The resulting package (zip file) can be found in the 'packages' directory of the Primo DevEnv.

## Code structure
### CSS
The CSS is split into single files which are combined to one `'custom1.css'` file. The files are concatenated in alphabetical order, so if the order is important, use numbers to ensure concatenation in the correct order.
Since `'custom1.css'` is a generated file, it should not be commited and thus is gitignored.

CSS Documentation from ExLibris: [https://github.com/ExLibrisGroup/primo-explore-package/blob/master/VIEW_CODE/css/README.md](https://github.com/ExLibrisGroup/primo-explore-package/blob/master/VIEW_CODE/css/README.md)

### HTML
HTML documentation from ExLibris: [https://github.com/ExLibrisGroup/primo-explore-package/blob/master/VIEW_CODE/html/README.md](https://github.com/ExLibrisGroup/primo-explore-package/blob/master/VIEW_CODE/html/README.md)

### Images
Images documentation from ExLibris: [https://github.com/ExLibrisGroup/primo-explore-package/blob/master/VIEW_CODE/img/README.md](https://github.com/ExLibrisGroup/primo-explore-package/blob/master/VIEW_CODE/img/README.md)

### JS
The Javascript code in organised in angular modules, one module per feature. The modules which need a Primo after directive as hook, are grouped accordingly. \
Services which are not exclusive to one module, are placed in the `'services'` directory. \
All modules must be imported into `'main.js'`, which is the entry point for the customization code. Code placed in `'main.js'` is will be used 'as-is' in the resulting `'custom.js'` file.
Since `'custom.js'` and `'custom.js.map'` are generated files, they should not be commited and thus are gitignored.

JS Documentation from ExLibris: [https://github.com/ExLibrisGroup/primo-explore-package/blob/master/VIEW_CODE/js/README.md](https://github.com/ExLibrisGroup/primo-explore-package/blob/master/VIEW_CODE/js/README.md)

HSGswisscovery modules: [README.md](js/modules/README.md)

## Links
* SLSP Swisscovery: https://github.com/Swiss-Library-Service-Platform/swisscovery
* BCUF customization: https://github.com/BCUF/bcufr-primo-views
* ETH customization: https://gitlab.com/ethlibrary/slsp/customization-eth-view
