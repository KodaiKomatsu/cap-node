using db from '../db/schema';

// @odata.draft.enabled
service AdminService {

    @odata.draft.enabled
    entity Catalogs as projection on db.ProductList actions {
        // function sampleBoundFunction (text:String) returns String;
        // action sampleBoundAction (text:String) returns String;
        @Common.DefaultValuesFunction
        function setOrdersDefaultValues() returns Orders;

    };

    // @(requires: 'authenticated-user')
    // @odata.draft.enabled
    entity BusinessPartners as projection on db.BusinessPartnerList;

    // @odata.draft.enabled
    entity Orders as projection on db.Orders;

    // @Common.DefaultValuesFunction
    // function Catalogs_setOrdersDefaultValues() returns Orders;

    function getAllBusinessPartners() returns BusinessPartners;

    entity Stocks as projection on db.Stocks;

    entity Warehouses as projection on db.Warehouses;

    entity Test {
        key ID: String;
        @Core.Computed: false
        virtual test: Boolean default false;
    }

}

annotate AdminService.Catalogs with {
    Orders @Common.DefaultValuesFunction: 'Catalogs_setOrdersDefaultValues';
};
