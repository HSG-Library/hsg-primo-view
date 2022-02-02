export class hsgServiceDetailsFoldableItemsController {

	constructor($scope, $element, $sce, hsgServiceDetailsFoldableItemsConfig, hsgTranslatorService) {
		this.$scope = $scope;
		this.$element = $element;
		this.$sce = $sce;
		this.config = hsgServiceDetailsFoldableItemsConfig;
		this.translator = hsgTranslatorService;
		this.parentCtrl = this.afterCtrl.parentCtrl;
		this.waiting = true;
		this.iconExpand = this.config.icons.expand;
		this.iconCollapse = this.config.icons.collapse;
	}

	$onInit() {
		this.rootEl = this.$element.parent().parent().query('div').children();
		let that = this;
		// add a watcher to the root element
		// trigger when children are rendered
		// and deregister after first call
		let deregister = this.$scope.$watch(
			function () {
				return that.rootEl.query('div');
			},
			function (newValue, oldValue) {
				if (that.waiting && newValue !== oldValue) {
					that.waiting = false;
					that.makeFoldable();
					deregister();
				}
			}
		);
	}

	makeFoldable() {
		let details = this.parentCtrl._details;
		for (let key in details) {
			let detail = details[key];
			if (typeof detail != 'object') {
				continue;
			}
			let values = detail.values[0].values;

			let textLength = values[0].length;
			if (textLength > 300) {
				this.addMarkup(this.getItemContainer(key), 1, true);
			} else  if (values.length > 4) {
				this.addMarkup(this.getItemContainer(key), 4, false);
			}
		}
	}


getItemContainer(key) {
	let children = this.rootEl.children();
	let child = children[key];
	return child.querySelector('.item-details-element-container');
}

addMarkup(itemContainer, count, longtext) {
	itemContainer.classList.add('hsg-collapsed');
	let item = itemContainer.querySelector('.item-details-element');
	let listitems = item.querySelectorAll('[role=listitem]');
	for (let key in listitems) {
		let listitem = listitems[key];
		if (typeof listitem != 'object') {
			continue;
		}
		if (longtext && key < count) {
			listitem.classList.add('hsg-foldable-item-longtext');
		}
		if (key >= count) {
			listitem.classList.add('hsg-foldable-item');
		}
	}
	let expand = document.createElement('div');
	expand.classList.add('hsg-expand-button');
	expand.innerHTML = this.iconExpand + this.translate('expandButtonLabel');
	item.insertBefore(expand, item.children[count]);
	let collapse = document.createElement('div');
	collapse.classList.add('hsg-collapse-button');
	collapse.innerHTML = this.iconCollapse + this.translate('collapseButtonLabel');
	collapse.style.display = 'none';
	item.appendChild(collapse);

	expand.addEventListener('click', function () {
		expand.style.display = 'none';
		collapse.style.display = 'inline-block';
		itemContainer.classList.remove('hsg-collapsed');
		itemContainer.classList.add('hsg-expanded');
	});

	collapse.addEventListener('click', function () {
		itemContainer.classList.add('hsg-collapsed');
		itemContainer.classList.remove('hsg-expanded');
		expand.style.display = 'inline-block';
		collapse.style.display = 'none';
	});
}

translate(key) {
	if (!this.config) {
		console.log("config missing");
		return key;
	}
	let msg = this.translator.getLabel(key, this.config);
	return this.$sce.trustAsHtml(msg);
}
}

hsgServiceDetailsFoldableItemsController.$inject = ['$scope', '$element', '$sce', 'hsgServiceDetailsFoldableItemsConfig', 'hsgTranslatorService'];
