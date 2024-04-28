const cds = require('@sap/cds');

describe('Service Level Test', ()=>{
    // const test = cds.test(__dirname+'/..');
    const { GET, expect } = cds.test(__dirname+'/..');

    it ('Admin Service ProductSet Test', async ()=>{   // Jest & Mocha
        const { data } = await GET ("/odata/v4/ext/ProductSet('HT-1000')?$select=ProductID,Category,Name");
        console.log(data);
        expect(data).to.eql({ // chai style expect
            "@odata.context": "$metadata#ProductSet(ProductID,Category,Name)/$entity",
            "ProductID": "HT-1000",
            "Category": "Notebooks",
            "Name": "Notebook Basic 15"
        })
    })

    it ('Admin Service BusinessPartnerSet Test', async ()=>{   // Jest & Mocha
        const { data } = await GET ("/odata/v4/ext/BusinessPartnerSet('0100000000')?$select=BusinessPartnerID,CompanyName,EmailAddress")
        expect(data).to.eql({ // chai style expect
            "@odata.context": "$metadata#BusinessPartnerSet(BusinessPartnerID,CompanyName,EmailAddress)/$entity",
            "BusinessPartnerID": "0100000000", 
            "CompanyName": "SAP", 
            "EmailAddress": "customer-do.not.reply@sap.com"
        })
    })

    it ('Admin Service function getContactList Test', async () => {
        const { data } = await GET ('/odata/v4/ext/getContactList()')
        expect(data.value[0]).to.eql({
            "BusinessPartnerID": "0100000000", 
            "DateOfBirth": null, 
            "EmailAddress": "customer-do.not.reply@sap.com", 
            "FaxNumber": "0622734004", 
            "FirstName": "Karl", 
            "Initials": "", 
            "Language": "EN", 
            "LastName": "Müller", 
            "MiddleName": "", 
            "Nickname": "", 
            "PhoneNumber": "0622734567", 
            "Sex": "M", 
            "Title": ""
        })
    })

    it ('Admin Service function getContactList Test', async () => {
        const { data } = await GET ('/odata/v4/ext/ContactSet')
        expect(data.value[0]).to.eql({
            "BusinessPartnerID": "0100000000",
            "Title": "",
            "FirstName": "Karl",
            "MiddleName": "",
            "LastName": "Müller",
            "Nickname": "",
            "Initials": "",
            "Sex": "M",
            "PhoneNumber": "0622734567",
            "FaxNumber": "0622734004",
            "EmailAddress": "customer-do.not.reply@sap.com",
            "Language": "EN",
            "DateOfBirth": null
        })
    })
})