var prompt = require('prompt');
var configMongo = require('./config-mongo.js');
var util = require('./util/utils');
var MongoClient = require('mongodb').MongoClient;

module.exports = {
  
    getNonProductInfo : function (cb) {

            var Companies_description = process.env.COMPANY_DESCRIPTION;
            if (Companies_description === undefined) {
                Companies_description = configMongo.Companies_description;
            }

            var promptCompanyDescription = {
                properties: {
                    company_description : {
                        message: 'What is the company description?',
                        default: Companies_description,
                        required: false
                    }
                }
            };


            prompt.get(promptCompanyDescription, function (err, result) {
                if (err) {
                    util.handleError(err);
                }
                configMongo.customer_name = result.company_description;
                configMongo.Users_products_commerce_settings_customer_name = result.company_description;
                configMongo.Users_products_jobsite_settings_customer_name = result.company_description;
                configMongo.Companies_products_commerce_settings_user_customer_name = result.company_description;
                configMongo.Companies_products_jobsite_settings_user_customer_name = result.company_description;

                configMongo.Companies_description = result.company_description;
                console.log('company description: ' + configMongo.Companies_description);

                var Companies_status = process.env.COMPANY_STATUS;
                if (Companies_status === undefined) {
                    Companies_status = configMongo.Companies_status;
                }

                var promptCompaniesStatus = {
                    properties: {
                        Companies_status: {
                            message: 'Is the company status active?',
                            default: Companies_status,
                            required: false
                        }
                    }
                };


                prompt.get(promptCompaniesStatus, function (err, result) {
                    if (err) {
                        util.handleError(err);
                    }

                    if (result.Companies_status.substring(0, 1) === 'y') {
                        configMongo.Companies_status = 'y';
                    }
                    else {
                        configMongo.Companies_status = 'n';
                    }
                    console.log('company status: ' + configMongo.Companies_status);

                    var Companies_settings_communications_email_from_name = process.env.Companies_settings_communications_email_from_name;
                    if (Companies_settings_communications_email_from_name === undefined) {
                        Companies_settings_communications_email_from_name = configMongo.Companies_settings_communications_email_from_name;
                    }

                    var promptCompaniesSettingsCommunicationsEmailFromName = {
                        properties: {
                            Companies_settings_communications_email_from_name: {
                                message: 'What is the company email name?',
                                default: Companies_settings_communications_email_from_name,
                                required: false
                            }
                        }
                    };


                    prompt.get(promptCompaniesSettingsCommunicationsEmailFromName, function (err, result) {
                        if (err) {
                            util.handleError(err);
                        }
                        configMongo.Companies_settings_communications_email_from_name = result.Companies_settings_communications_email_from_name;
                        console.log('company email name: ' + configMongo.Companies_settings_communications_email_from_name);

                        var Companies_settings_communications_email_from_value = process.env.Companies_settings_communications_email_from_value;
                        if (Companies_settings_communications_email_from_value === undefined) {
                            Companies_settings_communications_email_from_value = configMongo.Companies_settings_communications_email_from_value;
                        }

                        var promptCompaniesSettingsCommunicationsEmailFromValue = {
                            properties: {
                                Companies_settings_communications_email_from_value: {
                                    message: 'What is the company email Id?',
                                    default: Companies_settings_communications_email_from_value,
                                    required: false
                                }
                            }
                        };


                        prompt.get(promptCompaniesSettingsCommunicationsEmailFromValue, function (err, result) {
                            if (err) {
                                util.handleError(err);
                            }

                            configMongo.Companies_settings_communications_email_from_value = result.Companies_settings_communications_email_from_value;
                            console.log('company email id: ' + configMongo.Companies_settings_communications_email_from_value);


                            var Companies_settings_cloudStore = process.env.Companies_settings_cloudStore;
                            if (Companies_settings_cloudStore === undefined) {
                                Companies_settings_cloudStore = configMongo.Companies_settings_cloudStore;
                            }

                            var promptCompaniesSettingsCloudStore = {
                                properties: {
                                    Companies_settings_cloudStore: {
                                        message: 'Company has cloud store?',
                                        default: Companies_settings_cloudStore,
                                        required: false
                                    }
                                }
                            };


                            prompt.get(promptCompaniesSettingsCloudStore, function (err, result) {
                                if (err) {
                                    util.handleError(err);
                                }

                                if (result.Companies_settings_cloudStore.substring(0, 1) === 'y') {
                                    configMongo.Companies_settings_cloudStore = 'y';
                                }
                                else {
                                    configMongo.Companies_settings_cloudStore = 'n';
                                }

                                console.log('company has cloud store: ' + configMongo.Companies_settings_cloudStore);

                                var promptEnvironment = {
                                    properties: {
                                        env: {
                                            message: 'Enter y if the environment is alpha and n if production?',
                                            default: 'y',
                                            required: false
                                        }
                                    }
                                };

                                prompt.get(promptEnvironment, function(err,result) {
                                    if (err) {
                                        util.handleError(err);
                                    }

                                    if (result.env.substring(0, 1) === 'y') {
                                        configMongo.Companies_products_commerce_settings_env = configMongo.Companies_products_commerce_settings_env;
                                    }
                                    else {
                                        configMongo.Companies_products_commerce_settings_env = configMongo.Companies_products_commerce_settings_env_prod;
                                    }
                                    console.log('Environment : ' + configMongo.Companies_products_commerce_settings_env);

                                    /*var promptStyling = {
                                        properties: {
                                            include_styling :{
                                                message : 'Do you want to include style settings?',
                                                default : 'y',
                                                required : true
                                            }
                                        }
                                    }*/

                                    /*prompt.get(promptStyling, function (err, result) {
                                        if (err) {
                                            util.handleError(err);
                                        }*/

                                        /*if (result.include_styling.substring(0, 1) === 'y') {
                                            var Companies_customBranding_font = process.env.Companies_customBranding_font;
                                            if (Companies_customBranding_font === undefined) {
                                                Companies_customBranding_font = configMongo.Companies_customBranding_font;
                                            }

                                            var promptCompaniesCustomBrandingFont = {
                                                properties: {
                                                    Companies_customBranding_font: {
                                                        message: 'What is the company primary brand font?',
                                                        default: Companies_customBranding_font,
                                                        required: false
                                                    }
                                                }
                                            };


                                            prompt.get(promptCompaniesCustomBrandingFont, function (err, result) {
                                                if (err) {
                                                    util.handleError(err);
                                                }

                                                configMongo.Companies_customBranding_font = result.Companies_customBranding_font;
                                                console.log('company primary brand font: ' + configMongo.Companies_customBranding_font);

                                                var Companies_customBranding_font_2 = process.env.Companies_customBranding_font_2;
                                                if (Companies_customBranding_font_2 === undefined) {
                                                    Companies_customBranding_font_2 = configMongo.Companies_customBranding_font_2;
                                                }

                                                var promptCompaniesCustomBrandingFont_2 = {
                                                    properties: {
                                                        Companies_customBranding_font_2: {
                                                            message: 'What is the company secondary brand font?',
                                                            default: Companies_customBranding_font_2,
                                                            required: false
                                                        }
                                                    }
                                                };


                                                prompt.get(promptCompaniesCustomBrandingFont_2, function (err, result) {
                                                    if (err) {
                                                        util.handleError(err);
                                                    }

                                                    configMongo.Companies_customBranding_font_2 = result.Companies_customBranding_font_2;
                                                    console.log('company secondary brand font: ' + configMongo.Companies_customBranding_font_2);

                                                    //var Companies_branding_primary = process.env.Companies_branding_primary;
                                                    //if (Companies_branding_primary === undefined) {
                                                    //    Companies_branding_primary = configMongo.primary_branding_text_color;
                                                    //}
                                                    //
                                                    //var promptCompaniesBrandingPrimary = {
                                                    //    properties: {
                                                    //        Companies_branding_primary: {
                                                    //            message: 'What is the company primary branding text color?',
                                                    //            default: Companies_branding_primary,
                                                    //            required: false
                                                    //        }
                                                    //    }
                                                    //};
                                                    //
                                                    //
                                                    //prompt.get(promptCompaniesBrandingPrimary, function (err, result) {
                                                    //    if (err) {
                                                    //        util.handleError(err);
                                                    //    }
                                                    //
                                                    //    configMongo.Companies_branding_text_primary = result.Companies_branding_primary;
                                                    //    configMongo.primary_branding_text_color = result.Companies_branding_primary;
                                                    //    console.log('company primary branding: ' + configMongo.primary_branding_text_color);
                                                    //
                                                    //    var Companies_branding_secondary = process.env.Companies_branding_secondary;
                                                    //    if (Companies_branding_secondary === undefined) {
                                                    //        Companies_branding_secondary = configMongo.Companies_branding_secondary;
                                                    //    }
                                                    //
                                                    //    var promptCompaniesBrandingSecondary = {
                                                    //        properties: {
                                                    //            Companies_branding_secondary: {
                                                    //                message: 'What is the company secondary branding text color?',
                                                    //                default: Companies_branding_secondary,
                                                    //                required: false
                                                    //            }
                                                    //        }
                                                    //    };
                                                    //
                                                    //
                                                    //    prompt.get(promptCompaniesBrandingSecondary, function (err, result) {
                                                    //        if (err) {
                                                    //            util.handleError(err);
                                                    //        }
                                                    //
                                                    //        configMongo.Companies_branding_text_secondary = result.Companies_branding_secondary;
                                                    //        configMongo.Companies_branding_secondary = result.Companies_branding_secondary;
                                                    //        console.log('company secondary branding: ' + configMongo.Companies_branding_secondary);

                                                            //var Companies_branding_text_primary = process.env.Companies_branding_text_primary;
                                                            //if (Companies_branding_text_primary === undefined) {
                                                            //    Companies_branding_text_primary = configMongo.Companies_branding_text_primary;
                                                            //}
                                                            //
                                                            //var promptCompaniesBrandingTextPrimary = {
                                                            //    properties: {
                                                            //        Companies_branding_text_primary: {
                                                            //            message: 'What is the company primary branding text?',
                                                            //            default: Companies_branding_text_primary,
                                                            //            required: false
                                                            //        }
                                                            //    }
                                                            //};


                                                            //prompt.get(promptCompaniesBrandingTextPrimary, function (err, result) {
                                                            //    if (err) {
                                                            //        util.handleError(err);
                                                            //    }

                                                            //configMongo.Companies_branding_text_primary = result.Companies_branding_text_primary;
                                                            //console.log('company primary branding text: ' + configMongo.Companies_branding_text_primary);
                                                            //
                                                            //var Companies_branding_text_secondary = process.env.Companies_branding_text_secondary;
                                                            //if (Companies_branding_text_secondary === undefined) {
                                                            //    Companies_branding_text_secondary = configMongo.Companies_branding_text_secondary;
                                                            //}
                                                            //
                                                            //var promptCompaniesBrandingTextSecondary = {
                                                            //    properties: {
                                                            //        Companies_branding_text_secondary: {
                                                            //            message: 'What is the company secondary branding text?',
                                                            //            default: Companies_branding_text_secondary,
                                                            //            required: false
                                                            //        }
                                                            //    }
                                                            //};


                                                            //prompt.get(promptCompaniesBrandingTextSecondary, function (err, result) {
                                                            //    if (err) {
                                                            //        util.handleError(err);
                                                            //    }

                                                            //configMongo.Companies_branding_text_secondary = result.Companies_branding_text_secondary;
                                                            //console.log('company secondary branding text: ' + configMongo.Companies_branding_text_secondary);

                                                            var Companies_branding_logo = process.env.Companies_branding_logo;
                                                            if (Companies_branding_logo === undefined) {
                                                                Companies_branding_logo = configMongo.Companies_branding_logo;
                                                            }

                                                            var promptCompaniesBrandingLogo = {
                                                                properties: {
                                                                    Companies_branding_logo: {
                                                                        message: 'What is the company logo?',
                                                                        default: Companies_branding_logo,
                                                                        required: false
                                                                    }
                                                                }
                                                            };


                                                            prompt.get(promptCompaniesBrandingLogo, function (err, result) {
                                                                if (err) {
                                                                    util.handleError(err);
                                                                }

                                                                configMongo.Companies_branding_logo = result.Companies_branding_logo;
                                                                console.log('company logo: ' + configMongo.Companies_branding_logo);

                                                                var Companies_images_smallLogo = process.env.Companies_images_smallLogo;
                                                                if (Companies_images_smallLogo === undefined) {
                                                                    Companies_images_smallLogo = configMongo.Companies_images_smallLogo;
                                                                }

                                                                var promptCompaniesImagesSmallLogo = {
                                                                    properties: {
                                                                        Companies_images_smallLogo: {
                                                                            message: 'What is the company small logo?',
                                                                            default: Companies_images_smallLogo,
                                                                            required: false
                                                                        }
                                                                    }
                                                                };


                                                                prompt.get(promptCompaniesImagesSmallLogo, function (err, result) {
                                                                    if (err) {
                                                                        util.handleError(err);
                                                                    }

                                                                    configMongo.Companies_images_smallLogo = result.Companies_images_smallLogo;
                                                                    console.log('company small logo: ' + configMongo.Companies_images_smallLogo);

                                                                    cb();

                                                                });
                                                            });
                                                            //});
                                                            //});
                                                        //});
                                                    //});
                                                });
                                            });
                                        }*/
                                        //else {
                                            cb();
                                        //}
                                    });
                                });
                            });
                            //});
                        });
                    });
                });
            //});
    },

    getNonProductInfoFromDb : function(cb) {
        var promptFlag = {
            properties: {
                flag: {
                    message: 'Do you want to modify non-product related company information?',
                    default: 'y',
                    required: false
                }
            }
        };

        prompt.get(promptFlag, function(err, result){
            if (err){
                util.handleError(err);
            }

            if(result.flag.substring(0, 1) === 'y'){
                var data = {};
                var url = 'mongodb://' + configMongo.mongoHost + ':' + configMongo.mongoPort + '/'+ configMongo.company_code;
                MongoClient.connect(url, function(err, db) {
                    if (err) {
                        util.handleError(err);
                    }
                    else {
                        var collection = db.collection('company');
                        collection.find({}).toArray( function (err, result) {
                            if (err) {
                                util.handleError(err);
                            }
                            else {
                                data.company_code = result[0].code;
                                data.company_description = result[0].description;
                                data.company_status = result[0].status;
                                data.company_email_name = result[0].settings.communications.email.from.name;
                                data.company_email_value = result[0].settings.communications.email.from.value;
                                data.company_cloud_store = result[0].settings.cloudStore;

                                if (result[0].customBranding === undefined) {
                                    data.company_primary_brand_font = configMongo.Companies_customBranding_font;
                                    data.company_secondary_brand_font = configMongo.Companies_customBranding_font_2;
                                }
                                else {
                                    data.company_primary_brand_font = result[0].customBranding.font;
                                    data.company_secondary_brand_font = result[0].customBranding.font_2;
                                }

                                if (result[0].branding === undefined) {
                                    data.company_logo = configMongo.Companies_branding_logo;
                                }
                                else {
                                    data.company_logo = result[0].branding.logo;
                                }

                                if (result[0].images === undefined) {
                                    data.company_small_logo = configMongo.Companies_images_smallLogo;
                                }
                                else {
                                    data.company_small_logo = result[0].images.smallLogo;
                                }
                                data.env = result[0].products[0].settings.environment;

                                db.close();

                                var Companies_description = process.env.COMPANY_DESCRIPTION;
                                if (Companies_description === undefined) {
                                    Companies_description = data.company_description;
                                }

                                var promptCompanyDescription = {
                                    properties: {
                                        company_description: {
                                            message: 'What is the company description?',
                                            default: Companies_description,
                                            required: false
                                        }
                                    }
                                };


                                prompt.get(promptCompanyDescription, function (err, result) {
                                    if (err) {
                                        util.handleError(err);
                                    }

                                    configMongo.Companies_code = data.company_code;
                                    configMongo.Companies_description = result.company_description
                                    console.log('Company description: ' + configMongo.Companies_description);

                                    var Companies_status = process.env.COMPANY_STATUS;
                                    if (Companies_status === undefined) {
                                        Companies_status = data.company_status;
                                    }

                                    var promptCompaniesStatus = {
                                        properties: {
                                            Companies_status: {
                                                message: 'Is the company status active?',
                                                default: Companies_status,
                                                required: false
                                            }
                                        }
                                    };


                                    prompt.get(promptCompaniesStatus, function (err, result) {
                                        if (err) {
                                            util.handleError(err);
                                        }
                                        if (result.Companies_status.substring(0,1) === 'y') {
                                            configMongo.Companies_status = 'y';
                                        }
                                        else {
                                            configMongo.Companies_status = 'n';
                                        }

                                        console.log('company status: ' + configMongo.Companies_status);

                                        var Companies_settings_communications_email_from_name = process.env.Companies_settings_communications_email_from_name;
                                        if (Companies_settings_communications_email_from_name === undefined) {
                                            Companies_settings_communications_email_from_name = data.company_email_name;
                                        }

                                        var promptCompaniesSettingsCommunicationsEmailFromName = {
                                            properties: {
                                                Companies_settings_communications_email_from_name: {
                                                    message: 'What is the company email name?',
                                                    default: Companies_settings_communications_email_from_name,
                                                    required: false
                                                }
                                            }
                                        };


                                        prompt.get(promptCompaniesSettingsCommunicationsEmailFromName, function (err, result) {
                                            if (err) {
                                                util.handleError(err);
                                            }
                                            configMongo.Companies_settings_communications_email_from_name = result.Companies_settings_communications_email_from_name;
                                            console.log('company email name: ' + configMongo.Companies_settings_communications_email_from_name);

                                            var Companies_settings_communications_email_from_value = process.env.Companies_settings_communications_email_from_value;
                                            if (Companies_settings_communications_email_from_value === undefined) {
                                                Companies_settings_communications_email_from_value = data.company_email_value;
                                            }

                                            var promptCompaniesSettingsCommunicationsEmailFromValue = {
                                                properties: {
                                                    Companies_settings_communications_email_from_value: {
                                                        message: 'What is the company email Id?',
                                                        default: Companies_settings_communications_email_from_value,
                                                        required: false
                                                    }
                                                }
                                            };


                                            prompt.get(promptCompaniesSettingsCommunicationsEmailFromValue, function (err, result) {
                                                if (err) {
                                                    util.handleError(err);
                                                }

                                                configMongo.Companies_settings_communications_email_from_value = result.Companies_settings_communications_email_from_value;
                                                console.log('company email id: ' + configMongo.Companies_settings_communications_email_from_value);

                                                var Companies_settings_cloudStore = process.env.Companies_settings_cloudStore;
                                                if (Companies_settings_cloudStore === undefined) {
                                                    Companies_settings_cloudStore = data.company_cloud_store;
                                                }

                                                var promptCompaniesSettingsCloudStore = {
                                                    properties: {
                                                        Companies_settings_cloudStore: {
                                                            message: 'Company has cloud store?',
                                                            default: Companies_settings_cloudStore,
                                                            required: false
                                                        }
                                                    }
                                                };


                                                prompt.get(promptCompaniesSettingsCloudStore, function (err, result) {
                                                    if (err) {
                                                        util.handleError(err);
                                                    }
                                                    if (result.Companies_settings_cloudStore.substring(0,1) === 'y') {
                                                        configMongo.Companies_settings_cloudStore = 'y';
                                                    }
                                                    else {
                                                        configMongo.Companies_settings_cloudStore = 'n';
                                                    }
                                                    console.log('company has cloud store: ' + configMongo.Companies_settings_cloudStore);

                                                    var env = process.env.ENV;
                                                    if (env === undefined) {
                                                        /*if(data.env.trim() === configMongo.Companies_products_commerce_settings_env)
                                                            env = 'y';
                                                        else
                                                            env = 'n';
                                                        */
                                                        env = 'y';
                                                    }

                                                    var promptEnvironment = {
                                                        properties: {
                                                            env: {
                                                                message: 'Enter y if the environment is alpha and n if production?',
                                                                default: env,
                                                                required: false
                                                            }
                                                        }
                                                    };

                                                    prompt.get(promptEnvironment, function(err,result) {
                                                        if (err) {
                                                            util.handleError(err);
                                                        }

                                                        console.log('Environment : ' + result.env);
                                                        if (result.env.substring(0, 1) === 'y') {
                                                            configMongo.Companies_products_commerce_settings_env = configMongo.Companies_products_commerce_settings_env;
                                                        }
                                                        else {
                                                            configMongo.Companies_products_commerce_settings_env = configMongo.Companies_products_commerce_settings_env_prod;
                                                        }

                                                        /*var promptStyling = {
                                                            properties: {
                                                                include_styling :{
                                                                    message : 'Do you want to include style settings?',
                                                                    default : 'y',
                                                                    required : true
                                                                }
                                                            }
                                                        }*/

                                                        /*prompt.get(promptStyling, function (err, result) {
                                                            if (err) {
                                                                util.handleError(err);
                                                            }*/

                                                            /*if (result.include_styling.substring(0, 1) === 'y') {
                                                                var Companies_customBranding_font = process.env.Companies_customBranding_font;
                                                                if (Companies_customBranding_font === undefined) {
                                                                    Companies_customBranding_font = data.company_primary_brand_font;
                                                                }

                                                                var promptCompaniesCustomBrandingFont = {
                                                                    properties: {
                                                                        Companies_customBranding_font: {
                                                                            message: 'What is the company primary brand font?',
                                                                            default: Companies_customBranding_font,
                                                                            required: false
                                                                        }
                                                                    }
                                                                };


                                                                prompt.get(promptCompaniesCustomBrandingFont, function (err, result) {
                                                                    if (err) {
                                                                        util.handleError(err);
                                                                    }

                                                                    configMongo.Companies_customBranding_font = result.Companies_customBranding_font;
                                                                    console.log('company primary brand font: ' + configMongo.Companies_customBranding_font);

                                                                    var Companies_customBranding_font_2 = process.env.Companies_customBranding_font_2;
                                                                    if (Companies_customBranding_font_2 === undefined) {
                                                                        Companies_customBranding_font_2 = data.company_secondary_brand_font;
                                                                    }

                                                                    var promptCompaniesCustomBrandingFont_2 = {
                                                                        properties: {
                                                                            Companies_customBranding_font_2: {
                                                                                message: 'What is the company secondary brand font?',
                                                                                default: Companies_customBranding_font_2,
                                                                                required: false
                                                                            }
                                                                        }
                                                                    };

                                                                    prompt.get(promptCompaniesCustomBrandingFont_2, function (err, result) {
                                                                        if (err) {
                                                                            util.handleError(err);
                                                                        }

                                                                        configMongo.Companies_customBranding_font_2 = result.Companies_customBranding_font_2;
                                                                        console.log('company secondary brand font: ' + configMongo.Companies_customBranding_font_2);

                                                                        //var Companies_branding_primary = process.env.Companies_branding_primary;
                                                                        //if (Companies_branding_primary === undefined) {
                                                                        //    Companies_branding_primary = data.company_primary_branding;
                                                                        //}
                                                                        //
                                                                        //var promptCompaniesBrandingPrimary = {
                                                                        //    properties: {
                                                                        //        Companies_branding_primary: {
                                                                        //            message: 'What is the company primary branding text color?',
                                                                        //            default: Companies_branding_primary,
                                                                        //            required: false
                                                                        //        }
                                                                        //    }
                                                                        //};
                                                                        //
                                                                        //
                                                                        //prompt.get(promptCompaniesBrandingPrimary, function (err, result) {
                                                                        //    if (err) {
                                                                        //        util.handleError(err);
                                                                        //    }
                                                                        //
                                                                        //    configMongo.Companies_branding_text_primary = result.Companies_branding_primary;
                                                                        //    configMongo.primary_branding_text_color = result.Companies_branding_primary;
                                                                        //    console.log('company primary branding: ' + configMongo.primary_branding_text_color);
                                                                        //
                                                                        //    var Companies_branding_secondary = process.env.Companies_branding_secondary;
                                                                        //    if (Companies_branding_secondary === undefined) {
                                                                        //        Companies_branding_secondary = data.company_secondary_branding;
                                                                        //    }
                                                                        //
                                                                        //    var promptCompaniesBrandingSecondary = {
                                                                        //        properties: {
                                                                        //            Companies_branding_secondary: {
                                                                        //                message: 'What is the company secondary branding text color?',
                                                                        //                default: Companies_branding_secondary,
                                                                        //                required: false
                                                                        //            }
                                                                        //        }
                                                                        //    };
                                                                        //
                                                                        //
                                                                        //    prompt.get(promptCompaniesBrandingSecondary, function (err, result) {
                                                                        //        if (err) {
                                                                        //            util.handleError(err);
                                                                        //        }
                                                                        //
                                                                        //        configMongo.Companies_branding_text_secondary = result.Companies_branding_secondary;
                                                                        //        configMongo.Companies_branding_secondary = result.Companies_branding_secondary;
                                                                        //        console.log('company secondary branding: ' + configMongo.Companies_branding_text_primary);

                                                                                //var Companies_branding_text_primary = process.env.Companies_branding_text_primary;
                                                                                //if (Companies_branding_text_primary === undefined) {
                                                                                //    Companies_branding_text_primary = data.company_primary_branding_text;
                                                                                //}
                                                                                //
                                                                                //var promptCompaniesBrandingTextPrimary = {
                                                                                //    properties: {
                                                                                //        Companies_branding_text_primary: {
                                                                                //            message: 'What is the company primary branding text?',
                                                                                //            default: Companies_branding_text_primary,
                                                                                //            required: false
                                                                                //        }
                                                                                //    }
                                                                                //};

                                                                                //prompt.get(promptCompaniesBrandingTextPrimary, function (err, result) {
                                                                                //    if (err) {
                                                                                //        util.handleError(err);
                                                                                //    }
                                                                                //configMongo.Companies_branding_text_primary = result.Companies_branding_text_primary;
                                                                                //console.log('company primary branding text: ' + configMongo.Companies_branding_text_primary);
                                                                                //
                                                                                //var Companies_branding_text_secondary = process.env.Companies_branding_text_secondary;
                                                                                //if (Companies_branding_text_secondary === undefined) {
                                                                                //    Companies_branding_text_secondary = data.company_secondary_branding_text;
                                                                                //}
                                                                                //
                                                                                //var promptCompaniesBrandingTextSecondary = {
                                                                                //    properties: {
                                                                                //        Companies_branding_text_secondary: {
                                                                                //            message: 'What is the company secondary branding text?',
                                                                                //            default: Companies_branding_text_secondary,
                                                                                //            required: false
                                                                                //        }
                                                                                //    }
                                                                                //};


                                                                                //prompt.get(promptCompaniesBrandingTextSecondary, function (err, result) {
                                                                                //    if (err) {
                                                                                //        util.handleError(err);
                                                                                //    }
                                                                                //configMongo.Companies_branding_text_secondary = result.Companies_branding_text_secondary;
                                                                                //console.log('company secondary branding text: ' + configMongo.Companies_branding_text_secondary);

                                                                                var Companies_branding_logo = process.env.Companies_branding_logo;
                                                                                if (Companies_branding_logo === undefined) {
                                                                                    Companies_branding_logo = data.company_logo;
                                                                                }

                                                                                var promptCompaniesBrandingLogo = {
                                                                                    properties: {
                                                                                        Companies_branding_logo: {
                                                                                            message: 'What is the company logo?',
                                                                                            default: Companies_branding_logo,
                                                                                            required: false
                                                                                        }
                                                                                    }
                                                                                };


                                                                                prompt.get(promptCompaniesBrandingLogo, function (err, result) {
                                                                                    if (err) {
                                                                                        util.handleError(err);
                                                                                    }

                                                                                    configMongo.Companies_branding_logo = result.Companies_branding_logo;
                                                                                    console.log('Company logo: ' + configMongo.Companies_branding_logo);

                                                                                    var Companies_images_smallLogo = process.env.Companies_images_smallLogo;
                                                                                    if (Companies_images_smallLogo === undefined) {
                                                                                        Companies_images_smallLogo = data.company_small_logo;
                                                                                    }

                                                                                    var promptCompaniesImagesSmallLogo = {
                                                                                        properties: {
                                                                                            Companies_images_smallLogo: {
                                                                                                message: 'What is the company small logo?',
                                                                                                default: Companies_images_smallLogo,
                                                                                                required: false
                                                                                            }
                                                                                        }
                                                                                    };


                                                                                    prompt.get(promptCompaniesImagesSmallLogo, function (err, result) {
                                                                                        if (err) {
                                                                                            util.handleError(err);
                                                                                        }

                                                                                        configMongo.Companies_images_smallLogo = result.Companies_images_smallLogo;
                                                                                        console.log('company small logo: ' + configMongo.Companies_images_smallLogo);

                                                                                        cb();

                                                                                    });
                                                                                });
                                                                                //});
                                                                                //});
                                                                            //});
                                                                        //});
                                                                    });
                                                                });
                                                            }*/
                                                            //else {
                                                                cb();
                                                            //}
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                //});

                            }
                        });
                    }
                });
            }
            else {
                    var url = 'mongodb://' + configMongo.mongoHost + ':' + configMongo.mongoPort + '/'+ configMongo.company_code;

                    MongoClient.connect(url, function(err, db) {
                                        if (err) {
                                            util.handleError(err);
                                        }
                                        else {
                                            var collection = db.collection('company');
                                            collection.find({}).toArray( function (err, result) {
                                                if (err) {
                                                    util.handleError(err);
                                                }
                                                else {
                                                    configMongo.Companies_code = result[0].code;
                                                    configMongo.Companies_products_commerce_settings_env = result[0].environment; 
                                                    configMongo.Companies_description = result[0].description;
                                                    configMongo.Companies_status = result[0].status;
                                                    configMongo.Companies_settings_communications_email_from_name = result[0].settings.communications.email.from.name;
                                                    configMongo.Companies_settings_communications_email_from_value = result[0].settings.communications.email.from.value;
                                                    configMongo.Companies_settings_cloudStore = result[0].settings.cloudStore;

                                                    db.close();
                                                }
                                            });
                                        }
                                    });
                    cb();
            }
        });
    }
};