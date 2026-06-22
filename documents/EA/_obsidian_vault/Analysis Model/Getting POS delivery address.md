---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card detail/Use case"
domain: "Analysis Model"
element_id: 1589894
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Getting POS delivery address

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card detail/Use case

## 📝 Notes

This rule describes how to get delivery address of a salesroom if POS delivery option is chosen
Input:

	
- SalesroomCode


Output:

	
- SalesroomName
	
- DeliveryAddress 



	
- System sets SalesroomName = Salesroom.Name and DeliveryAddress by the Salesroom address from the found Salesroom having Address Type = BUSINESS_PLACE
	
- If no such address type is found, system fills in DeliveryAddress by message MSG_CardDeliveryAddresNotExist ("There is no address defined for chosen option.")

## 🔗 Connections (2)

- ← Dependency: [[12.501 Show card detail (UseCase 1627282)]]
- ← Dependency: [[12.510 Change delivery address (UseCase 1849965)]]

## 📊 Appears In (2 diagrams)

- Use Case: Card detail - Use case
- Use Case: Other Card operations - Use case
