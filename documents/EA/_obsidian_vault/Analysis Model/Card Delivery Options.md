---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1822819
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Card Delivery Options

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

// Returns list of Card Delivery options
Input:
- CardService (reference to particular version)
- attribute Economical_Status.Employer_required for selected economical status 

Find CardService and return list of card delivery options prepared as follows:
If CardService.POSDeliveryAllowed then add 'POS' to the list.
If CardService.CustomerAddressDeliveryAllowed and 

	
- attribute Economical_Status.Employer_required=TRUE then add  'CUSTOMER_PERMANENT', 'CUSTOMER_CONTACT' and 'CUSTOMER_EMPLOYER' (possibilities in dependency on Card Delivery Type Option codelist) to the list.
	
- attribute Economical_Status.Employer_required=FALSE then add 'CUSTOMER_PERMANENT', 'CUSTOMER_CONTACT' (possibilities in dependency on Card Delivery Type Option codelist) to the list.

## 🔗 Connections (2)

- ← Dependency: [[Card delivery type (GUIElement 1716428)]]
- ← Dependency: [[Card Service validation rule]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
