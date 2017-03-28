var generators = require('yeoman-generator');
var mkdirp     = require('mkdirp');
var chalk      = require('chalk');
var fs         = require('fs');
var utils      = require('../../utils');


var TEMPLATES_PATHS = {
    ACTIONS:  'actions.js',
    ACTIONS_TYPES:  'actionTypes.js',
    REDUCER: 'reducer.js',
    SCHEMAS: 'schemas.js',
    SELECTORS: 'selectors.js',
};

module.exports = generators.Base.extend({

    // Get features`s name
    promptingName: function () {
        var done = this.async();

        this.prompt({
            type    : 'input',
            name    : 'name',
            message : 'Print entity name'
        }, function (answers) {
            this._name = answers.name;
            done();
        }.bind(this));
    },

    // Get actions`s name
    promptingActions: function () {
        var done = this.async();

        this.prompt({
            type    : 'input',
            name    : 'name',
            message : 'Ввидите имя действий (через запятую)'
        }, function (answers) {
            this._actions = answers.name ? answers.name.replace(/\s+/ig, '').split(',') : [];
            done();
        }.bind(this));
    },

    writing: function () {
        if (fs.existsSync(this._name + '/')) {
            console.log(chalk.red('Фича с именем "' + this._name + '" уже существует'));
            return;
        }

        // Create reducer file
        this.fs.copyTpl(
            this.templatePath(TEMPLATES_PATHS.REDUCER),
            this.destinationPath(this._name + '/reducer.js'),
            {
                name: this._name,
                actions: this._actions,
                actionsTypes: this._actions.map(utils.toDashedFromCamelcased).map(s => s.toUpperCase()),
            }
        );

        // Create actions file
        this.fs.copyTpl(
            this.templatePath(TEMPLATES_PATHS.ACTIONS),
            this.destinationPath(this._name + '/actions.js'),
            {
                name: this._name,
                actions: this._actions,
                actionsTypes: this._actions.map(utils.toDashedFromCamelcased).map(s => s.toUpperCase()),
            }
        );

        // Create actionsTypes file
        this.fs.copyTpl(
            this.templatePath(TEMPLATES_PATHS.ACTIONS_TYPES),
            this.destinationPath(this._name + '/actionTypes.js'),
            {
                name: this._name,
                actionsTypes: this._actions.map(utils.toDashedFromCamelcased).map(s => s.toUpperCase()),
            }
        );

        // Create schemas file
        this.fs.copyTpl(
            this.templatePath(TEMPLATES_PATHS.SCHEMAS),
            this.destinationPath(this._name + '/schemas.js'),
            {
                name: this._name,
            }
        );

        // Create selectors file
        this.fs.copyTpl(
            this.templatePath(TEMPLATES_PATHS.SELECTORS),
            this.destinationPath(this._name + '/selectors.js'),
            {
                name: this._name,
                upName: utils.upFirstLetter(this._name),
            }
        );
     }
});
