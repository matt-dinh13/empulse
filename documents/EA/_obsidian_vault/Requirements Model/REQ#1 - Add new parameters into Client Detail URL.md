---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-205 Marketing Offers - new parameters in URL (CBL-168)"
domain: "Requirements Model"
element_id: 1270467
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Add new parameters into Client Detail URL

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-205 Marketing Offers - new parameters in URL (CBL-168)

## 📝 Notes

Add new parameters into URL for calling the page with Client detail in BSL application:


	
- triggerMarketingOffers - boolean

If triggerMarketingOffers = True then BSL opens Client detail and automatically triggers opening of modal window, which will display marketing offers with respect to other parameters sent in URL.
If triggerMarketingOffers = False then BSL only opens Client detail (as is in current solution).


	
- additionalInfo - string containing concatenation of additional parameters in structure (key, value)

The value has to be saved in session similarly like already existing parameters BusinessChannel.
When method RespondToMarketingOffers of MarkeringOfferWS is called, additionalInfo will be parsed to pairs (key, value) and included as new parameters to request.

Note: 
Internal structure of additionalInfo (separators, etc.) will be described in technical documentation.

## 📊 Appears In (1 diagrams)

- Custom: PCG-205 Marketing Offers - new parameters in URL (CBL-168)
