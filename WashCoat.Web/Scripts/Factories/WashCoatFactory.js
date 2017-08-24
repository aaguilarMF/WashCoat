var WashCoatFactory = function ($http, $q) {
    return function () {

        var deferredObject = $q.defer();

        $http.get(
            '/WashCoat/GetWashCoats'
        ).
        success(function (data) {
            deferredObject.resolve(data);
            /*if (data == "True") {
                deferredObject.resolve({ success: true });
            } else {
                deferredObject.resolve({ success: false });
            }*/
        }).
        error(function (data) {
            deferredObject.resolve({ success: false });
        });

        return deferredObject.promise;
    }
}

WashCoatFactory.$inject = ['$http', '$q'];