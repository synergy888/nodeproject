var chai = require('chai'),
	expect = chai.expect,
    sinon = require('sinon');

chai.use(require('sinon-chai'));

chai.use(require('chai-fs'));

describe('mongo-transform', function() {
	var transformProperties;
	var env;
	var config;
	var transform;

	beforeEach(function () {
		config 				= require('../../scripts/JadeTransform/config-mongo.js');
		prompts				= require('../../scripts/JadeTransform/config-prompt.js');
		transform 			= require('../../scripts/JadeTransform/util/transform.js');
		transformProperties = transform.populateTransformObjects(config)
	})

	describe('populateTransformObjects - New customer unit test', function () {
		it('should return output_to_folder_only value that matches transformProperty', function () {
			expect(transformProperties.output_to_folder_only).equal('n');
		});
		it('should return input_folder value that matches transformProperty', function () {
			expect(transformProperties.input_folder).equal('mongo_english');
		});
		it('should return output_folder value that matches transformProperty', function () {
			expect(transformProperties.output_folder).equal('mongo_english_out');
		});
	});
});