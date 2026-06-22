---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Disbursement confirmation/Logical Data Model/DisbursementConfirmationFile"
domain: "Analysis Model"
element_id: 1494938
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}ExtendedProperty

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Disbursement confirmation/Logical Data Model/DisbursementConfirmationFile

## 📝 Notes

{ADD CBL-4769 PAYM-1804}
List of extended properties for disbursement confirmation

LDM of attributes
- key  = Contract->OutgoingPayment -> Paym_ext_property_value.Value
- value = Contract->OutgoingPayment -> Paym_ext_property_value.Value

## 🔗 Connections (2)

- → Generalization: [[{ADD}KeyValueType]]
- ← Dependency: [[{MOD}DisbursementConfirmationType]]

## 📊 Appears In (1 diagrams)

- Logical: DisbursementConfirmationFile
