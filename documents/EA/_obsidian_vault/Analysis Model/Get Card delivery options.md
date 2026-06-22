---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Use case"
domain: "Analysis Model"
element_id: 1589893
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get Card delivery options

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Use case

## 📝 Notes

It returns list of Card Delivery options by the current setting of Card service and CardDeliveryOptionSetting configuration of each country
Possible values for CardDeliveryOptionSetting:

	
- POS
	
- CUSTOMER_PERMANENT
	
- CUSTOMER_CONTACT
	
- CUSTOMER_EMPLOYER


Input:
- CardService (reference to particular version)
- attribute Economical_Status.Employer_required for selected economical status 

Output:
- CardDeliveryOption list

Get CardDeliveryOptionSetting from the country custom parameters into CardDeliveryOption list
Find CardService and return list of card delivery options prepared as follows:
If CardService.POSDeliveryAllowed = 0 then remove 'POS' from the list.
If CardService.CustomerAddressDeliveryAllowed = 0 then remove 'CUSTOMER_PERMANENT', 'CUSTOMER_CONTACT' and 'CUSTOMER_EMPLOYER' from the list
If CardService.CustomerAddressDeliveryAllowed = 1 and

	
- attribute Economical_Status.Employer_required=0 then remove  'CUSTOMER_EMPLOYER' from the list.

## 🔗 Connections (1)

- ← Dependency: [[12.510 Change delivery address (UseCase 1849965)]]

## 📊 Appears In (1 diagrams)

- Use Case: Other Card operations - Use case
