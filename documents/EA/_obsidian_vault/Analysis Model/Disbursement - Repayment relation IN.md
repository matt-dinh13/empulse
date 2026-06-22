---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/Business Rules/IN"
domain: "Analysis Model"
element_id: 1616006
diagrams: 3
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Disbursement - Repayment relation IN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/Business Rules/IN

## 📝 Notes

Country specific validation - only for IN and loans with InitialTransactionType=CASH.

This restriction is applicable only for application form, not for contract detail.
If checkAvailableDisbursementsOnSalesroom = 0 then
Value of Disbursement method field is set to value according to user selection of Repayment method as follows:
1. Repayment method = Direct debit -> only Disbursement method = General bank account is possible. Client bank account is stored the same as in case of DDM (non editable)

For AF: Checkbox Use DDM account for credit disbursement is checked and disabled. Disbursement channel panel is hidden.
2. Repayment method = Other -> only Disbursement method = Payment provider is possible.

If checkAvailableDisbursementsOnSalesroom = 1 then
1. Checkbox Use DDM account for credit disbursement is checked and disabled only if GBA channel is set on salesroom otherwise checkbox is hidden.

2. Disbursement channel panel
If checkbox Use DDM account for credit disbursement is displayed then set disbursement method = GBA and hide disbursement channel panel otherwise system checks number of possible disbursement method for product type. If  only one  disbursement method for product type is available on salesroom then disbursement method = allowed disbursement method and panel is hidden otherwise the combobox for selection of disbursement method (and panel) is displayed

## 🔗 Connections (5)

- ← Dependency: [[Disbursement method (GUIElement 1311734)]]
- ← Dependency: [[Repayment method (GUIElement 1686024)]]
- ← Dependency: [[Use DDM account for credit disbursement]]
- ← Dependency: [[Disbursement method (GUIElement 1820256)]]
- ← Dependency: [[Disbursement method (GUIElement 1873897)]]

## 📊 Appears In (3 diagrams)

- Custom: Business rules IN
- Custom: IN - Business rules
- Custom: Payment channel - validation rules
