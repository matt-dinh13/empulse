---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Offer Management/Validation rules"
domain: "Analysis Model"
element_id: 1692196
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Update Offer Card service validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Offer Management/Validation rules

## 📝 Notes

- code - only values of card services assigned to the offer(Product Offer Response- >Offer Financial Parameters-> Offer Card Service -> Service.Code) are accepted


	
- delivery type - Mandatory, the value must be valid according to return list from Card Delivery Options. The value CUSTOMER_PERMANENT and CUSTOMER_CONTACT are removed from list if the primary address is not filled in. The value CUSTOMER_EMPLOYER is removed from list if the employer address is not filled in.
	
- emboss name - must be empty if Emboss Name Setting Allowed returns False; the value is validated according to Emboss name - validation rules
	
- issue method - Mandatory, the value must be valid according to return list from Card issue methods
	
- cardPickupSalesroom - mandatory if delivery type = POS, must be Code from Salesroom (in HOMESIS) allowing card pickuping (Salesroom.CardPickup=TRUE)

## 📊 Appears In (1 diagrams)

- Custom: Validation rules
