var AddWashCoatFactory = function ($http, $q) {
    return function (addWashCoatModel) {
        var deferredObject = $q.defer();
        var req = {
            method: 'POST',
            url: '/WashCoat/AddWashCoat',
            headers: {
                'Content-Type': 'application/json'
            },
            data: addWashCoatModel
        }
        $http(req).then(function (response) {
            deferredObject.resolve(response.data);
        });
        /*$http.post(
            '/WashCoat/AddWashCoat', JSON.stringify(addWashCoatModel),
                contentType: "application/json"
        ).then(function (response) {
            deferredObject.resolve(response.data);
        });*/

        return deferredObject.promise;
        
    }
}

AddWashCoatFactory.$inject = ['$http', '$q'];