// Docs links
var Router = (
    UniUtils.get(Package, 'kadira:flow-router.FlowRouter') ||
    UniUtils.get(Package, 'iron:router.Router')
);

var defaultCollectionPath    = 'Listing';
var defaultCollectionDocPath = 'Fullview';

UniCollection.prototype.setCollectionRoute = function (path, definition) {
    definition.name = _normalizeName.call(this, definition.name, defaultCollectionPath);
    Router.route(path, definition);
};

UniCollection.UniDoc.prototype.getLink = function (name, queryParams) {
    return Router.path(_normalizeName.call(this, name, defaultCollectionDocPath), this, queryParams);
};

UniCollection.UniDoc.prototype.goToLink = function (name, queryParams) {
    return Router.go(_normalizeName.call(this, name, defaultCollectionDocPath), this, queryParams);
};

UniCollection.prototype.getLink = function (name, params, queryParams) {
    return Router.path(_normalizeName.call(this, name, defaultCollectionPath), params, queryParams);
};

UniCollection.prototype.goToLink = function (name, params, queryParams) {
    return Router.go(_normalizeName.call(this, name, defaultCollectionPath), params, queryParams);
};


var _normalizeName = function (name, defaultName) {
    name = name || defaultName;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return this.getCollectionName() + name;
};
