---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Remotely filling/Business rules"
domain: "Analysis Model"
element_id: 1716863
diagrams: 1
connections: 10
tags:
  - requirement
  - analysis-model
---

# 📋 Get salesroom by operation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Remotely filling/Business rules

## 📝 Notes

Get the salesroom of the operation that was done on the application/contract.

Input:

	
- contract
	
- operation - one of values (APPLICATION_CREATED, OFFER_CHOSEN, CONTRACT_CREATED,AF_SUBMITTED, 2BOD_SAVED, OFFER_REFUSED, DOCUMENTATION_GENERATED, CONTRACT_SIGNED)


If the operation=APPLICATION_CREATED, the salesroom is defined by Temporary Application -> Salesroom.
If the operation=OFFER_CHOSEN, the salesroom is defined by Contract -> Business Event.Salesroom where Business Event.Type="CHOOSE_OFFER" or "SUBMIT_OFFER"
If the operation=CONTRACT_CREATED, the salesroom is defined by Contract -> Business Event.Salesroom where Business Event.Type="CREATE_CONTRACT".
If the operation=AF_SUBMITTED, the salesroom is defined by Contract -> Business Event.Salesroom where Business Event.Type="SUBMIT_PRE" or "CREATE_CONTRACT".
If the operation=2BOD_SAVED, the salesroom is defined by Contract -> Business Event.Salesroom where Business Event.Type="SAVE_2BOD".
If the operation=OFFER_REFUSED, the salesroom is defined by Contract -> Business Event.Salesroom where Business Event.Type="REFUSE_OFFER".
If the operation=DOCUMENTAION_GENERATED, the salesroom is defined by Contract -> Business Event.Salesroom where Business Event.Type="GENERATE_DOCUMENTATION". {ADD PAYM-2754}(If no salesroom is found, salesroom from APPLICATION_CREATED is used. --This is because for some old contracts this event doesnt exists{/ADD})
If the operation=CONTRACT_SIGNED, the salesroom is defined by Contract -> Business Event.Salesroom where Business Event.Type="SIGN".

If more then one record with defined business event type exists for one contract, the last recorded entry is chosen.

## 🔗 Connections (10)

- ← Dependency: [[Salesroom code (GUIElement 1813823)]]
- ← Dependency: [[Salesroom name (GUIElement 1813818)]]
- ← Dependency: [[Partner name (GUIElement 1813813)]]
- ← Dependency: [[Partner code (GUIElement 1813831)]]
- ← Dependency: [[Salesroom business model]]
- ← Dependency: [[SellerType]]
- ← Dependency: [[Select salesroom for application payment channel]]
- ← Dependency: [[Partner (GUIElement 1873900)]]
- ← Dependency: [[Get allowed disbursement methods for application]]
- ← Dependency: [[{MOD}Sign contract finalization]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules
