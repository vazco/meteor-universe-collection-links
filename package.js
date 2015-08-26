Package.describe({
    name: 'universe:collection-links',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.3');
    api.use([
        'kadira:flow-router@2.3.0',
        'universe:utilities@1.0.0',
        'vazco:universe-collection'
    ]);
    api.addFiles('collection-links.js');
});

