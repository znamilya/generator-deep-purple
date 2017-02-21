var generators = require('yeoman-generator');
var mkdirp     = require('mkdirp');
var chalk      = require('chalk');
var fs         = require('fs');
var utils      = require('../../utils');


var TEMPLATES_PATHS = {
    INDEX: 'index.js',
    REACT: 'react.jsx',
    STYLES: 'styles.scss',
};

module.exports = generators.Base.extend({
    _checkIfTechSelected: function (name) {
        return this._techs.indexOf(name) !== -1;
    },

    // Get component`s name
    promptingName: function () {
        var done = this.async();

        this.prompt({
            type    : 'input',
            name    : 'name',
            message : 'Имя компонента'
        }, function (answers) {
            this._name = utils.upFirstLetter(answers.name);
            done();
        }.bind(this));
    },

    // Get technologies
    promptingTechs: function () {
        var done = this.async();

        this.prompt({
            type    : 'checkbox',
            name    : 'techs',
            message : 'Выберите технологии',
            choices: ['react', 'scss', 'images']
        }, function (answers) {
            this._techs = answers.techs;
            done();
        }.bind(this));
    },

    writing: function () {
        if (fs.existsSync(this._name + '/')) {
            console.log(chalk.red('Компонент с именем "' + this._name + '" уже существует'));
            return;
        }

        // Create react file
        if (this._checkIfTechSelected('react')) {
            this.fs.copyTpl(
                this.templatePath(TEMPLATES_PATHS.REACT),
                this.destinationPath(this._name + '/' + this._name + '.jsx'),
                {
                    name: this._name,
                    cssClass: utils.convertNameToCSSClass(this._name),
                    addStyles: this._checkIfTechSelected('scss'),
                }
            );
        }

        // Create scss file
        if (this._checkIfTechSelected('scss')) {
            this.fs.copyTpl(
                this.templatePath(TEMPLATES_PATHS.STYLES),
                this.destinationPath(this._name + '/' + this._name + '.scss'),
                {
                    name: this._name,
                    cssClass: utils.convertNameToCSSClass(this._name),
                }
            );
        }

        // Create images file
        if (this._checkIfTechSelected('images')) {
           mkdirp.sync(this._name + '/' + 'images/');
        }

        // Create index file
        this.fs.copyTpl(
            this.templatePath(TEMPLATES_PATHS.INDEX),
            this.destinationPath(this._name + '/index.js'),
            {
                name: this._name,
            }
        );
     }
});
