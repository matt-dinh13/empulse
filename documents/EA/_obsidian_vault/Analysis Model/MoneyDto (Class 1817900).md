---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2"
domain: "Analysis Model"
element_id: 1817900
diagrams: 4
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 MoneyDto

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2

## 📝 Notes

General representation of some particular financial parameter (of various entities).

## 🔗 Connections (3)

- ← Dependency: [[BaseDirectDebitMandateInfo]]
- ← Dependency: [[RegularPaymentDataDto]]
- ← Dependency: [[{MOD}CreateDDMRequest]]

## 📊 Appears In (4 diagrams)

- Logical: DirectDebitMandateRestV2 - CreateDDM
- Logical: DirectDebitMandateRestV2 - CreateDDMDraft
- Logical: DirectDebitMandateRestV2 - GetDDM
- Logical: DirectDebitMandateRestV2 - UpdateDDMOrDraft

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| currency | string |  |
| amount | decimal |  |
