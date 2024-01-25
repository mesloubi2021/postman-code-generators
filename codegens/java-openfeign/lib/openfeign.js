var _ = require('./lodash');

/**
 * Used in order to get options for generation of Java openfeign code snippet
 *
 * @module getOptions
 *
 * @returns {Array} Options specific to generation of Java opefeign code snippet
 */
function getOptions () {
  return [
    {
      name: 'Include boilerplate',
      id: 'includeBoilerplate',
      type: 'boolean',
      default: 'false',
      description: 'Include class definition and import statements in snippet'
    }
  ];

}

/**
 * Converts postman sdk request object to java openfeign code snippet
 *
 * @param {*} request
 * @param {*} options
 * @param {*} callback
 */
function convert (request, options, callback) {

  if (_.isFunction(options)) {
    callback = options;
    options = {};
  }
  return 'stub';
}
module.exports = {
  convert: convert,
  getOptions: getOptions
};
