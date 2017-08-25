var WashCoatFactory = function ($http, $q) {
    //return function () {
    var getWashCoatData = function () {
        var deferredObject = $q.defer();

        $http.get(
            '/WashCoat/GetWashCoatsData'
        ).then(function (response) {
            deferredObject.resolve(response.data);
        });
        return deferredObject.promise;
    };
    var deleteWashCoatEntry = function (id) {
        var deferredObject = $q.defer();

        $http.post(
            '/WashCoat/DeleteWashCoatEntry',
            {id: id}
        ).then(function (response) {
            deferredObject.resolve(response.data);
        });
        return deferredObject.promise;
    };
    return {
        getWashCoatData: getWashCoatData,
        deleteWashCoatEntry: deleteWashCoatEntry
    }
    //}
}

WashCoatFactory.$inject = ['$http', '$q'];