---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2"
domain: "Analysis Model"
element_id: 1817907
diagrams: 4
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 DDMExtendedPropertiesDto

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2

## 📝 Notes

Instance of a single direct debit mandate's extended property.

## 🔗 Connections (2)

- ← Dependency: [[BaseDirectDebitMandateInfo]]
- ← Dependency: [[{MOD}CreateDDMRequest]]

## 📊 Appears In (4 diagrams)

- Logical: DirectDebitMandateRestV2 - CreateDDM
- Logical: DirectDebitMandateRestV2 - CreateDDMDraft
- Logical: DirectDebitMandateRestV2 - GetDDM
- Logical: DirectDebitMandateRestV2 - UpdateDDMOrDraft

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| key | string |  |
| value | string |  |
