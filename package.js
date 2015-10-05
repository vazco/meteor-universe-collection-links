Package.describe({
    name: 'universe:collection-links',
    version: '0.5.2',
    // Brief, one-line summary of the package.
    summary: 'Adds routes to universe collection and get link to pages directly from document or collection',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/vazco/meteor-universe-collection-links',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.3');
    api.use([
        'universe:utilities@2.0.4',
        'vazco:universe-collection@1.8.8'
    ]);

    api.use(['kadira:flow-router@2.3.0', 'iron:router@1.0.9'], {weak: true});

    api.addFiles('collection-links.js');
});

