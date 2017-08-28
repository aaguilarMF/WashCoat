var AddWashCoatController = function ($scope, AddWashCoatFactoryRef) {
    $scope.BatchID = { val: null };
    $scope.LabLogNumber = { val: null };
    $scope.Solids500C = { val: null };
    $scope.Pt = { val: null };
    $scope.Pd = { val: null };
    $scope.Rh = { val: null };
    $scope.Zr = { val: null };
    $scope.Ce = { val: null };
    $scope.Ni = { val: null };
    $scope.Ba = { val: null };
    $scope.La = { val: null };
    $scope.Ir = { val: null };
    $scope.pH = { val: null };
    $scope.Y = { val: null };
    $scope.Nd = { val: null };
    $scope.Pr = { val: null };
    $scope.Hf = { val: null };
    $scope.Temperature = { val: null };
    $scope.Viscosity_Fresh = { val: null };
    $scope.Viscosity_Aged = { val: null };
    $scope.Arizona_Solids = { val: null };
    $scope.WashCoatLoading = { val: null };
    $scope.dataToSubmit = {
        //'ID': $scope.ID,
        'BatchID': $scope.BatchID,
        'Lab Log Number': $scope.LabLogNumber,
        'Solids 500C': $scope.Solids500C,
        'Pt': $scope.Pt,
        'Pd': $scope.Pd,
        'Rh': $scope.Rh,
        'Zr': $scope.Zr,
        'Ce': $scope.Ce,
        'Ni': $scope.Ni,
        'Ba': $scope.Ba,
        'La': $scope.La,
        'Ir': $scope.Ir,
        'pH': $scope.pH,
        'Y': $scope.Y,
        'Nd': $scope.Nd,
        'Pr': $scope.Pr,
        'Hf': $scope.Hf,
        'Temperature': $scope.Temperature,
        'Viscosity_Fresh': $scope.Viscosity_Fresh,
        'Viscosity_Aged': $scope.Viscosity_Aged,
        'Arizona_Solids': $scope.Arizona_Solids,
        'WashCoatLoading': $scope.WashCoatLoading

    };
    $scope.addWashCoat = function () {
        var addWashCoatModel = Models.AddWashCoat(
            //$scope.ID.val,
            $scope.BatchID.val,
            $scope.LabLogNumber.val,
            $scope.Solids500C.val,
            $scope.Pt.val,
            $scope.Pd.val,
            $scope.Rh.val,
            $scope.Zr.val,
            $scope.Ce.val,
            $scope.Ni.val,
            $scope.Ba.val,
            $scope.La.val,
            $scope.Ir.val,
            $scope.pH.val,
            $scope.Y.val,
            $scope.Nd.val,
            $scope.Pr.val,
            $scope.Hf.val,
            $scope.Temperature.val,
            $scope.Viscosity_Fresh.val,
            $scope.Viscosity_Aged.val,
            $scope.Arizona_Solids.val,
            $scope.WashCoatLoading.val
        );

        var result = AddWashCoatFactoryRef(addWashCoatModel);
        result.then(function (data) {
            if (data) {
                $scope.BatchID.val = null;
                $scope.LabLogNumber.val = null;
                $scope.Solids500C.val = null;
                $scope.Pt.val = null;
                $scope.Pd.val = null;
                $scope.Rh.val = null;
                $scope.Zr.val = null;
                $scope.Ce.val = null;
                $scope.Ni.val = null;
                $scope.Ba.val = null;
                $scope.La.val = null;
                $scope.Ir.val = null;
                $scope.pH.val = null;
                $scope.Y.val = null;
                $scope.Nd.val = null;
                $scope.Pr.val = null;
                $scope.Hf.val = null;
                $scope.Temperature.val = null;
                $scope.Viscosity_Fresh.val = null;
                $scope.Viscosity_Aged.val = null;
                $scope.Arizona_Solids.val = null;
                $scope.WashCoatLoading.val = null;
                $scope.$emit('resetGrid');
                alert("Entry has been updated on grid;");
            }
        });

    };
};

AddWashCoatController.$inject = ['$scope', 'AddWashCoatFactory'];

