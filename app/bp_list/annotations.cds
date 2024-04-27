using AdminService as service from '../../srv/Service';
annotate service.BusinessPartners with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'ID',
                Value : ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'BusinessPartnerRole',
                Value : BusinessPartnerRole,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CompanyName',
                Value : CompanyName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'WebAddress',
                Value : WebAddress,
            },
            {
                $Type : 'UI.DataField',
                Label : 'EmailAddress',
                Value : EmailAddress,
            },
            {
                $Type : 'UI.DataField',
                Label : 'PhoneNumber',
                Value : PhoneNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'FaxNumber',
                Value : FaxNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'LegalForm',
                Value : LegalForm,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CurrencyCode',
                Value : CurrencyCode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CreatedAt',
                Value : CreatedAt,
            },
            {
                $Type : 'UI.DataField',
                Label : 'ChangedAt',
                Value : ChangedAt,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'ID',
            Value : ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'BusinessPartnerRole',
            Value : BusinessPartnerRole,
        },
        {
            $Type : 'UI.DataField',
            Label : 'CompanyName',
            Value : CompanyName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'WebAddress',
            Value : WebAddress,
        },
        {
            $Type : 'UI.DataField',
            Label : 'EmailAddress',
            Value : EmailAddress,
        },
    ],
);

