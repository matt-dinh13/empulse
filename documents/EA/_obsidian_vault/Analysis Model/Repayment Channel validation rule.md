---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773401
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Repayment Channel validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

Value must be in Payment_Channel_Type.Code where:

	
- Payment_Channel_Type->Payment_Channel_For_Product_Type.Payment_Purpose = 'RE'

and

	
- Payment_Channel_Type->Payment_Channel_For_Product_Type.Product_Type = Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters.Product_Type

and

	
- Payment_Channel_Type->Payment_Channel_For_Product_Type.Transaction_Type = Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters.Initial_Transaction_Type

## 🔗 Connections (1)

- ← Dependency: [[PaymentChannel validation rule]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
