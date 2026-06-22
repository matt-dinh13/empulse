---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/VN"
domain: "Analysis Model"
element_id: 1783485
diagrams: 15
connections: 13
tags:
  - requirement
  - analysis-model
---

# 📋 Account number validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/VN

## 📝 Notes

When launched for DDM account number
System validates account number according to Bank. DD account number validation. If this does not exist, system validates number according to Bank. General account number validation. If even this does not exist, system runs the country specific validations.

When launched for other than DDM account number
System validates account number according to Bank. General account number validation. Only if this does not exist, system runs the country specific validation.

If exists linked validation with specific message for given variant, then this message is used for validation according to Bank. DD account number validation and Bank. General account number validation

## 🔗 Connections (13)

- ← Dependency: [[Account number - IN]]
- ← Generalization: [[Account number validation - ID specific error message]]
- ← Dependency: [[DDM account number for 1BoD]]
- ← Dependency: [[PaymentChannelType validation rule - ID]]
- ← Dependency: [[PaymentChannel validation rule-PH]]
- ← Dependency: [[Account number (GUIElement 1747129)]]
- ← Dependency: [[Account number (GUIElement 1747181)]]
- ← Dependency: [[Account number (GUIElement 1747177)]]
- ← Dependency: [[PaymentChannel validation rule-VN]]
- → Dependency: [[Account number]]
- → Dependency: [[Account number - VN]]
- → Dependency: [[Account number - KZ]]
- → Dependency: [[Account number - PH]]

## 📊 Appears In (15 diagrams)

- Custom: Bank account in AF - VN
- Custom: Create/Update bank account - KZ
- Custom: Create/update bank account - VN
- Custom: Create/Update bank account for consolidation - KZ
- Custom: Create/Update bank acount - IN
- Custom: General bank account on Application detail
- Custom: Validation rules - ID
- Custom: Validation Rules - ID
- Custom: Validation rules - PH
- Custom: Validation rules - Product
- Custom: Validation rules IN
- Custom: Validation rules KZ
- Custom: Validation rules PH
- Custom: Validation rules VN
- Custom: Validation rules-VN
