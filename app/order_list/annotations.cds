using AdminService as service from '../../srv/Service';

annotate service.Orders with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'businessPartner_ID',
            Value : businessPartner_ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'product_ID',
            Value : product_ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Quantity',
            Value : Quantity,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Note',
            Value : Note,
        },
        {
            $Type : 'UI.DataField',
            Label : 'hideNote',
            Value : hideNote,
        },
    ]
);
annotate service.Orders with {
    businessPartner @Common.ValueList : {
        $Type : 'Common.ValueListType',
        CollectionPath : 'BusinessPartners',
        Parameters : [
            {
                $Type : 'Common.ValueListParameterInOut',
                LocalDataProperty : businessPartner_ID,
                ValueListProperty : 'ID',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'BusinessPartnerRole',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'CompanyName',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'WebAddress',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'EmailAddress',
            },
        ],
    }
};
annotate service.Orders with {
    product @Common.ValueList : {
        $Type : 'Common.ValueListType',
        CollectionPath : 'Catalogs',
        Parameters : [
            {
                $Type : 'Common.ValueListParameterInOut',
                LocalDataProperty : product_ID,
                ValueListProperty : 'ID',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'TypeCode',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'Category',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'Name',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'NameLanguage',
            },
        ],
    }
};
annotate service.Orders with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'businessPartner_ID',
                Value : businessPartner_ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'product_ID',
                Value : product_ID,
            },
            
            {
                $Type : 'UI.DataField',
                Label : 'Quantity',
                Value : Quantity,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Note',
                Value : Note,
            },
            {
                $Type : 'UI.DataField',
                Label : 'hideNote',
                Value : hideNote,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
