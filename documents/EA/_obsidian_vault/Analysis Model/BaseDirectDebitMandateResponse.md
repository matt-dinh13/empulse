---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2"
domain: "Analysis Model"
element_id: 1817911
diagrams: 6
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 BaseDirectDebitMandateResponse

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2

## 📝 Notes

Object containing the base set of data applicable for various direct-debit-mandate-related operations.

## 🔗 Connections (6)

- ← Generalization «XSDextension»: [[ValidateDDMResponse]]
- ← Generalization «XSDextension»: [[CreateDDMResponse (Class 1817905)]]
- ← Generalization «XSDextension»: [[GetDDMResponse (Class 1817904)]]
- ← Generalization «XSDextension»: [[UpdateDDMOrDraftResponse]]
- ← Generalization «XSDextension»: [[UpdateECSProviderForDDMResponse]]
- ← Generalization «XSDextension»: [[CreateDDMDraftResponse]]

## 📊 Appears In (6 diagrams)

- Logical: DirectDebitMandateRestV2 - CreateDDM
- Logical: DirectDebitMandateRestV2 - CreateDDMDraft
- Logical: DirectDebitMandateRestV2 - GetDDM
- Logical: DirectDebitMandateRestV2 - UpdateDDMOrDraft
- Logical: DirectDebitMandateRestV2 - UpdateECSProvider
- Logical: DirectDebitMandateRestV2 - ValidateDDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| errorMessage | string |  |
| resultCode | string |  |
