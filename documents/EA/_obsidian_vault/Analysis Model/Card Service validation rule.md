---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773428
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Card Service validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

- code - only values of card services assigned to the offer(Product Offer Response- >Offer Financial Parameters-> Offer Card Service -> Service.Code) are accepted


	
- delivery type - the value must be valid according to return list from Card Delivery Options
	
- emboss name - must be empty if Emboss Name Setting Allowed returns False; the value is validated according to Emboss name - validation rules
	
- issue method - the value must be valid according to return list from Card issue methods
	
- cardPickupSalesroom - mandatory if delivery type = POS, must be Code from Salesroom (in HOMESIS) allowing card pickuping (Salesroom.CardPickup=TRUE)

## 🔗 Connections (4)

- → Dependency: [[Card Delivery Options]]
- → Dependency: [[Card issue methods]]
- ← Dependency: [[Application validation rule (Requirement 1773433)]]
- → Generalization: [[Service validation rule]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
