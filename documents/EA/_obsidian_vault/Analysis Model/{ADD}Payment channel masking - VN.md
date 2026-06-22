---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Business Rules/VN"
domain: "Analysis Model"
element_id: 1857656
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Payment channel masking - VN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Business Rules/VN

## 📝 Notes

{ADD LOR-10855 + PAYM-5919 /}
Masking is used if access right UC01_210_PaymentChannelData is NOT assigned to user.

Masking rules:
Field				Masking type	Value example
Beneficiary Family name		masked 		*****
Beneficiary Middle name		masked 		*****
Beneficiary First name		Display 		Han
Address				only display district and province 		********,Thu Duc City, Ho Chi Minh City
ID No.				only display 3 last digits/characters 	*********123
Bank/Card account number	only display 3 last digits/characters 	*******123
Bank/Card account holder name	fully masked 	*********
Primary phone number		only display 3 last digits 	*******049

## 📊 Appears In (1 diagrams)

- Custom: Show contract detail - Business Rules - VN
