---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/Tariff Calculation/Business Rules"
domain: "Modules"
element_id: 1879062
diagrams: 5
connections: 6
tags:
  - requirement
  - modules
---

# 📋 Algorithm: Find tariff by Current Tariff Use flag

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/Tariff Calculation/Business Rules

## 📝 Notes

Decision what version of tariff has to be used for calculation of tariff item of selected type for defined contract:
If rule Is Flag on Tariff Item Type (TariffItemType from input, USE_CURR_TARIFF_VERSION) returns True 

	
- then current version of tariff which is currently assigned to contract or contract service
	
- else version of tariff which is currently assigned to contract or contract service   


Input:

	
- tariff item type
	
- contract
	
- contractService - optional
	
- offer - optional
	
- offerService - optional


Output:

	
- tariffVersion (code, version number)


Algorithm:
OFP - Offer Financial Parameters of contract on input where chosen = true
FP - Financial Parameters of contract
If FP are not defined yet then OFP are used for tariff searching. 

If offerService is defined on input then 
-- tariffVersion = offerService.TariffVersion
-- if not found and offer is defined on input then
---- tariffVersion = offer.TariffVersion
Return

If offer is defined on input then 
-- tariffVersion = offer.TariffVersion
Return

Search for tariffVersion which was used for offer calculation
If rule Is Flag on Tariff Item Type (TariffItemType from input, USE_CURR_TARIFF_VERSION) returns False then
-- If contractService is defined on input then
---- search for OFP.OfferService where OFP.OfferService.Service = ContractService.Service  
---- if found and a tariff is assigned to the offerService then 
------ tariffVersion = OFP.OfferService.TariffVersion
------ Return
-- tariffVersion = contract.OFP.TariffVersion
-- Return

Search for active tariffVersion which is currently assigned to contractService or contract 
If rule Is Flag on Tariff Item Type (TariffItemType from input, USE_CURR_TARIFF_VERSION) returns True then
-- If contractService is defined on input and a tariff is assigned to the contractService then 
---- tariffVersion = contractService.Tariff (active version)
---- Return
-- tariffVersion = contract.FP.Tariff (active version)
-- Return

## 🔗 Connections (6)

- ← Dependency: [[Find Tariff Items by Tariff Item Type]]
- ← Dependency: [[{MOD}04.140 Charge fees]]
- ← Dependency: [[{MOD}Check fee request and find corresponding tariff item]]
- → Dependency: [[Is Flag on Tariff Item Type]]
- ← Dependency: [[Algorithm_ Find tariff items by usage]]
- ← Dependency: [[01.478 Show supposed debt for CEL contract (UseCase 1876077)]]

## 📊 Appears In (5 diagrams)

- Custom: Business Rules
- Use Case: Cooling-off period processing
- Use Case: Debt calculator
- Use Case: Fee services used by external system (Collection)
- Use Case: Fees-back service evaluation and processing
