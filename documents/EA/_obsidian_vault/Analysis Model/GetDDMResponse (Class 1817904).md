---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2"
domain: "Analysis Model"
element_id: 1817904
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GetDDMResponse

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2

## 📝 Notes

Response containing the result (and other related outputs) of the particular operation of getting data of direct debit mandates (or their drafts) selected based on the specified filters.

## 🔗 Connections (3)

- → Dependency: [[{MOD}DirectDebitMandateData]]
- → Generalization «XSDextension»: [[BaseDirectDebitMandateResponse]]
- ← Usage: [[DDM (Class 1817895)]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitMandateRestV2 - GetDDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ddmData | DirectDebitMandateData |  |
| totalRows | int |  |
