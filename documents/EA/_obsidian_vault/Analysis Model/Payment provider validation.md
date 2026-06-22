---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/Validation rules"
domain: "Analysis Model"
element_id: 1716224
diagrams: 4
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Payment provider validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/Validation rules

## 📝 Notes

Validation rules for creating/updating payment channel of type = Payment provider: 
(the validation is done based on retrieved data from  HOMESIS) 

	
- Salesroom is Active
	
- Salesroom.Partner status is Active
	
- Salesroom.Partner.Type = Partner bank

## 🔗 Connections (4)

- ← Dependency: [[Payment provider (Action 1716225)]]
- ← Dependency: [[PaymentChannel validation rule-PH]]
- ← Dependency: [[PaymentChannel validation rule-VN]]
- ← Dependency: [[PaymentChannel validation rule]]

## 📊 Appears In (4 diagrams)

- Custom: Payment channel - validation rules
- Custom: Payments data validation
- Custom: Validation rules - PH
- Custom: Validation rules-VN
