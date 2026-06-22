---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2"
domain: "Analysis Model"
element_id: 1817892
diagrams: 3
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 DraftBankAccountDataDto

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2

## 📝 Notes

Object containing the data about the bank account associated with the direct debit mandate (or its draft).

## 🔗 Connections (1)

- ← Dependency: [[BaseDirectDebitMandateInfo]]

## 📊 Appears In (3 diagrams)

- Logical: DirectDebitMandateRestV2 - CreateDDMDraft
- Logical: DirectDebitMandateRestV2 - GetDDM
- Logical: DirectDebitMandateRestV2 - UpdateDDMOrDraft

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | string |  |
| accountHolderName | string |  |
| accountType | string |  |
| bankBranchSyncCode | string |  |
