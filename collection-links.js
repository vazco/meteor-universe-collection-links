// Docs links
var Router = UniUtils.get(Package, 'kadira:flow-router.FlowRouter');
if (!Router) { //If no flow router, try get iron router
    Router = UniUtils.get(Package, 'iron:router.Router');
}

UniCollection.prototype.setCollectionRoute = function (path, definition) {
    definition.name = _normalizeName.call(this, definition.name, 'Listing');
    FlowRouter.route(path, definition);
};

UniCollection.UniDoc.prototype.getLink = function (name, queryParams) {
    return FlowRouter.path(_normalizeName.call(this, name, 'Fullview'), this, queryParams);
};

UniCollection.UniDoc.prototype.goToLink = function (name, queryParams) {
    return FlowRouter.go(_normalizeName.call(this, name, 'Fullview'), this, queryParams);
};

UniCollection.prototype.getLink = function (name, params, queryParams) {
    return FlowRouter.path(_normalizeName.call(this, name, 'Listing'), params, queryParams);
};

UniCollection.prototype.goToLink = function (name, params, queryParams) {
    return FlowRouter.go(_normalizeName.call(this, name, '', 'Listing'), params, queryParams);
};


var _normalizeName = function (name, defaultName) {
    name = name || defaultName;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return this.getCollectionName() + name;
};