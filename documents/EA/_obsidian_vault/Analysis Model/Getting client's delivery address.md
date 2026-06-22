---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card detail/Use case"
domain: "Analysis Model"
element_id: 1589892
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Getting client's delivery address

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card detail/Use case

## 📝 Notes

This rule describes how to get client's delivery address if one of delivery option is chosen:

	
- CUSTOMER_PERMANENT


	
- CUSTOMER_CONTACT
	
- CUSTOMER_EMPLOYER


Input:

	
- DeliveryOption 


Output:

	
- DeliveryAddress



	
- If no client's address data exists yet, system calls CIF party management by Get client current contacts from CIF with CUID as parameter
	
- If an error is returned, system fills in Delivery address field by the returned error description
	
- If a returned type address exists, it is processed for setting the DeliveryAddress object by DeliveryOption as follow:
CUSTOMER_CONTACT - take contact address partyRole->postalAddress where classification=CONTACT
CUSTOMER_PERMANENT - take permanent address partyRole->postalAddress where classification=PERMANENT
CUSTOMER_EMPLOYER - take employment address partyRelationship(having type = CUSTOMER_PER_REL)->employmentInfo.postalAddress
	
- In an address for a Delivery option type do not exists, system sets DeliveryAddress by message MSG_CardDeliveryAddresNotExist ("There is no address defined for chosen option.")

## 🔗 Connections (2)

- ← Dependency: [[12.501 Show card detail (UseCase 1627282)]]
- ← Dependency: [[12.510 Change delivery address (UseCase 1849965)]]

## 📊 Appears In (2 diagrams)

- Use Case: Card detail - Use case
- Use Case: Other Card operations - Use case
