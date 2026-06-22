---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV1"
domain: "Analysis Model"
element_id: 1711073
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}Extended Property

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV1

## 📝 Notes

LDM of attributes
- key  = Contract->OutgoingPayment -> Paym_ext_property_value.Value
- value = Contract->OutgoingPayment -> Paym_ext_property_group.Code = DDM

## 🔗 Connections (2)

- → Dependency: [[DDMExtendedPropertyData]]
- ← Dependency: [[DirectDebitMandateData]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitServiceRestAPI - Get DDM
