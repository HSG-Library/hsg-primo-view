//-----------------------------------------------


export class slspScoreRequestController {

    constructor($scope) {
        this.$scope = $scope;
        this._didLogError = false;

    }


    $doCheck() {
        const parentCtrl = this.afterCtrl && this.afterCtrl.parentCtrl;
        if (!parentCtrl || typeof parentCtrl.isMusic !== 'function') {
            return;
        }

        const isScoreRequest = !!parentCtrl.isMusic();

        // $doCheck runs on every digest; only write when a change is needed.
        if (isScoreRequest && parentCtrl._showVolumeRefineWarning) {
            parentCtrl._showVolumeRefineWarning = false;
        }

    }

}
slspScoreRequestController.$inject = ['$scope'];