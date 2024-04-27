sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'bplist/test/integration/FirstJourney',
		'bplist/test/integration/pages/BusinessPartnersList',
		'bplist/test/integration/pages/BusinessPartnersObjectPage',
		'bplist/test/integration/pages/OrdersObjectPage'
    ],
    function(JourneyRunner, opaJourney, BusinessPartnersList, BusinessPartnersObjectPage, OrdersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('bplist') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBusinessPartnersList: BusinessPartnersList,
					onTheBusinessPartnersObjectPage: BusinessPartnersObjectPage,
					onTheOrdersObjectPage: OrdersObjectPage
                }
            },
            opaJourney.run
        );
    }
);