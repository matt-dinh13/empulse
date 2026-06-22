---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer/Validation Rules"
domain: "Analysis Model"
element_id: 1708709
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Maximal monthly payment

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer/Validation Rules

## 📝 Notes

If option Consumer loan is selected then

	
- MaximumMonthlyPayment must be in interval <1, (TotalPrice - MaximalCashPaymentAmount)>
(MSG_CalcInvalidMaxMonthlyPayment)

else 

	
- MaximumMonthlyPayment <= Credit Amount
(MSG_CalcCashInvalidMaxMonthlyPayment)

## 🔗 Connections (1)

- ← Dependency: [[Maximum monthly payment (GUIElement 1823030)]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
