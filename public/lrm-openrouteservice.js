L.Routing.OpenRouteService = L.Routing.OSRMv1.extend({
    options: {
        serviceUrl: 'https://api.openrouteservice.org/v2/directions/driving-car',
        timeout: 30 * 1000
    },

    initialize: function (apiKey, options) {
        L.Routing.OSRMv1.prototype.initialize.call(this, options);
        this._apiKey = apiKey;
    },

    buildRouteUrl: function (waypoints, options) {
        let coords = waypoints.map(wp => wp.latLng.lng + ',' + wp.latLng.lat).join('|');
        return this.options.serviceUrl + '?api_key=' + this._apiKey + '&start=' + coords.split('|')[0] + '&end=' + coords.split('|').pop();
    },

    _routeDone: function (response, inputWaypoints, callback, context) {
        if (!response || !response.features || !response.features[0]) {
            callback.call(context, {
                status: -1,
                message: 'No route found'
            });
            return;
        }

        const route = response.features[0];
        const coordinates = route.geometry.coordinates.map(coord => L.latLng(coord[1], coord[0]));

        callback.call(context, null, [{
            name: '',
            coordinates: coordinates,
            instructions: [],
            summary: {
                totalDistance: route.properties.summary.distance,
                totalTime: route.properties.summary.duration
            },
            inputWaypoints: inputWaypoints,
            actualWaypoints: [inputWaypoints[0], inputWaypoints[inputWaypoints.length - 1]],
            waypointIndices: [0, coordinates.length - 1]
        }]);
    },

    _convertRoute: function (response, inputWaypoints) {
        return this._routeDone(response, inputWaypoints, function () {}, this);
    },

    _request: function (url, callback, context) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this._routeDone(data, this._waypoints, callback, context);
            })
            .catch(err => {
                callback.call(context, {
                    status: -1,
                    message: err.message
                });
            });
    }
});

L.Routing.openrouteservice = function (apiKey, options) {
    return new L.Routing.OpenRouteService(apiKey, options);
};
