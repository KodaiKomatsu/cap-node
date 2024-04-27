namespace db;

using { managed } from '@sap/cds/common';


entity BusinessPartnerList {
    key ID : String(10) not null;
    BusinessPartnerRole : String(3) not null;
    CompanyName : String(80) not null;
    WebAddress : LargeString not null;
    EmailAddress : String(255) not null;
    PhoneNumber : String(30) not null;
    FaxNumber : String(30) not null;
    LegalForm : String(10) not null;
    CurrencyCode : String(5) not null;
    CreatedAt : Timestamp not null;
    ChangedAt : Timestamp not null;
    Orders: Association to many Orders on Orders.businessPartner = $self;
};

entity ProductList {
    key ID : UUID;
    TypeCode : String(2) ;
    Category : String(40);
    Name : String(255);
    NameLanguage : String(2);
    @UI.Hidden
    Description : String(255);
    DescriptionLanguage : String(2);
    SupplierID : String(10);
    SupplierName : String(80);
    TaxTarifCode : Integer;
    MeasureUnit : String(3);
    WeightMeasure : Decimal(13, 3);
    WeightUnit : String(3);
    CurrencyCode : String(5);
    Price : Decimal(15);
    Width : Decimal(13, 3);
    Depth : Decimal(13, 3);
    Height : Decimal(13, 3);
    DimUnit : String(3);
    CreatedAt : Timestamp;
    ChangedAt : Timestamp;
    // Orders: Association to many Orders on Orders.product = $self;
    // @Common.DefaultValuesFunction: 'Catalogs_setOrdersDefaultValues'
    Orders: Composition of many Orders on Orders.product = $self;
    Stocks: Composition of many Stocks on Stocks.product = $self;
    @Core.Computed: false
    virtual hideNote : Boolean default true;
}

entity Orders: managed {
    key ID : UUID;
    businessPartner: Association to one BusinessPartnerList;
    product: Association to one ProductList;
    Quantity: Integer not null;
    // @UI.Hidden
    // @UI.Hidden: hideNote
    Note: String(100);
    @Core.Computed: false
    virtual hideNote : Boolean default true;
    // something : String(11);
}

entity Stocks : managed {
    key ID : UUID;
    product: Association to one ProductList;
    warehouse: Association to one Warehouses;
    Quantity: Integer;
}

entity Warehouses: managed {
    key ID: UUID;
    Location: String;
    Name: String;
}