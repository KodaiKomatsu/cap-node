const cds = require('@sap/cds')

module.exports = async function () {

    this.before('READ', 'BusinessPartners', async (req) => {
        console.log("READ Business Partners")
    })

    this.before('CREATE', 'BusinessPartners', async (req) => {
        console.log("CREATE Business Partners")
    })

    this.before('DELETE', 'BusinessPartners', async (req) => {
        console.log("DELETE Business Partners")
    })

    this.on('READ', 'ProductSet', async(req, res) => {
        const ext = await cds.connect.to('GWSAMPLE_BASIC');
        return await ext.run(req.query);
    })

    this.on('READ', 'BusinessPartnerSet', async(req, res) => {
        const ext = await cds.connect.to('GWSAMPLE_BASIC');
        return await ext.run(req.query);
    })

    this.on('READ', 'ContactSet', async(req, res) => {
        const ext = await cds.connect.to('GWSAMPLE_BASIC');
        return await ext.run(req.query);
    })

    this.on('getContactList', async (req, res) => {
        const ext = await cds.connect.to('GWSAMPLE_BASIC');
        const { ContactSet } = ext.entities;
        const result = await ext.run(SELECT.from(ContactSet).columns("BusinessPartnerID", "Title", "FirstName", "MiddleName", "LastName", "Nickname", "Initials", "Sex", "PhoneNumber", "FaxNumber", "EmailAddress", "Language", "DateOfBirth"))
        return result;
    })

    // const api = 'xsuaa_api';
    // const xsuaa_bind = JSON.parse(process.env.VCAP_SERVICES).xsuaa[0];
    // const api_def = cds.env.requires[api];
    // api_def.credentials.url = xsuaa_bind.credentials.url;
    // const xsuaa = await cds.connect.to(api_def);
    // // console.log(JSON.parse(process.env.VCAP_SERVICES).xsuaa[0]);

    // this.on('setOrdersDefaultValues', ({params: [Object]}) => {
    //     console.log("-------------------------")
    //     console.log(Object);
    //     console.log("Set Default Value for ID: " + Object.ProductID);
    //     console.log("-------------------------")
    //     const oOrder = {
    //         businessPartner_BusinessPartnerID: "BP123456",
    //         product_ProductID: Object.ProductID,
    //         Quantity: 1000,
    //         Note: "This Order Info Is Created Automatically"
    //     }
    //     return oOrder;
    // });

    // this.on('Catalogs_setOrdersDefaultValues','Catalogs', () => {
    //     console.log("-------------------------")
    //     console.log(Object);
    //     console.log("Set Default Value for ID: " + Object.ProductID);
    //     console.log("-------------------------")
    //     const oOrder = {
    //         businessPartner_BusinessPartnerID: "BP123456",
    //         product_ProductID: Object.ProductID,
    //         Quantity: 1000,
    //         Note: "This Order Info Is Created Automatically"
    //     }
    //     return oOrder;
    // });

    // this.on('getAllBusinessPartners', async req => {
    //     const bpService = await cds.connect.to('AdminService');
    //     let query = SELECT.from('BusinessPartners');
    //     var result = bpService.run(query);
    //     return result;
    // })

    // this.before('CREATE', ['Orders', 'Catalogs'], (req, res) => {
    //     console.log(req);

    // })

    // const ans = await cds.connect.to('Cloud.Foundry.Producer.API');
    // this.after('CREATE','Orders', async req => {
    //     const payload = {
    //         "eventType": "NotWorkingExternalRecommendationService",
    //         "eventTimestamp": 1535618178,
    //         "resource": {
    //            "resourceName": "web-shop",
    //            "resourceType": "app",
    //            "tags": {
    //               "env": "prod"
    //            }
    //         },
    //         "severity": "FATAL",
    //         "category": "ALERT",
    //         "subject": "Overloaded external dependency of My Web Shop external dependency",
    //         "body": "External dependency showing recommendations does not respond on time. Stop some clients to reduce the load.",
    //         "tags": {
    //            "ans:correlationId": "30118",
    //            "ans:status": "CREATE_OR_UPDATE",
    //            "customTag": "42"
    //         }
    //      }
    //     // let data = await gw.run(req.query);
    //     await ans.post('/',payload)
    //         .catch((Error) => {
    //             console.log(Error);
    //         })
    //         .then((result) => {
    //             console.log(result)
    //         })
    // });

    // this.after('READ', 'Orders', (req, res) => {
    //     console.log(res);
    // })

    // this.on('sampleFunction', ({data: {text}}) => "Hello" + text);

    // this.on('sampleBoundFunction', 'Catalogs', ({params: [id], data: {text}}) => id + "Hello" + text);

    // this.on('setDefaultValue', 'Orders', ({params: [Object]}) => {
    //     console.log("-------------------------")
    //     console.log("Set Default Value for ID: " + Object.Order_ID);
    //     console.log("-------------------------")
    //     return "DefaultValueFunction";
    // });

    // this.on(['setDefaultValues', 'Catalogs_setDefaultValues'], ['Catalogs', 'Orders'], ({params: [Object]}) => {
    //     console.log("-------------------------")
    //     console.log(Object);
    //     console.log("Set Default Value for ID: " + Object.ProductID);
    //     console.log("-------------------------")
    //     const oOrder = {
    //         businessPartner_BusinessPartnerID: "BP123456",
    //         product_ProductID: Object.ProductID,
    //         Quantity: 1000,
    //         Note: "This Order Info Is Created Automatically"
    //     }
    //     return oOrder;
    // });

    // this.on('Catalogs_setDefaultValues', (req, res) => {
    //     const oOrder = {
    //         businessPartner_BusinessPartnerID: "BP123456",
    //         product_ProductID: req.query.ProductID,
    //         Quantity: 1000,
    //         Note: "This Order Info Is Created Automatically"
    //     }
    //     return oOrder;
    // })

}