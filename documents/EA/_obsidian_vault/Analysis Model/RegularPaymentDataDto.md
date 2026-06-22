---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2"
domain: "Analysis Model"
element_id: 1817889
diagrams: 4
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 RegularPaymentDataDto

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2

## 📝 Notes

Object containing the data about the direct debit mandate's regular payments.

## 🔗 Connections (3)

- → Dependency: [[MoneyDto (Class 1817900)]]
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
| regularPaymentAmount | MoneyDto |  |
| regularPaymentTypeCode | string |  |
