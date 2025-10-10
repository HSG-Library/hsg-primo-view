export class slspBookRequestFormMsgController {
    constructor($scope, $element, $timeout) {
        this.$scope = $scope;
        this.$element = $element;
        this.$timeout = $timeout;

    }



    $doCheck() {
        this.$timeout(() => {

                this.parentCtrl = this.afterCtrl.parentCtrl;
                // console.log('parentCtrl', this.parentCtrl);




                let formMessageText = angular.element(document.querySelector('.getItNgrs.physical-book .request_form_message'));
                let newFormMessageText = angular.element(document.querySelector('#newBookRequestFormMsg'));
                // Ersetze den DOM-Inhalt mit formMessageLabel

                // console.log('formMessageText', formMessageText);
                // console.log('newFormMessageText', newFormMessageText);

        }, 0);
    }
}

slspBookRequestFormMsgController.$inject = ['$scope', '$element', '$timeout'];