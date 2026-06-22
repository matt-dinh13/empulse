---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2"
domain: "Analysis Model"
element_id: 1817909
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}DirectDebitMandateData

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2

## 📝 Notes

Instance of a single direct debit mandate (or its draft).

## 🔗 Connections (4)

- → Dependency: [[{MOD}Evaluate DDM eligibility for DDS generation]]
- → Dependency: [[{MOD}ProviderData]]
- ← Dependency: [[GetDDMResponse (Class 1817904)]]
- → Generalization «XSDextension»: [[BaseDirectDebitMandateInfo]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitMandateRestV2 - GetDDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| confirmationStatus | string |  |
| confirmationStatusRemarkCode | string |  |
| confirmationStatusRemarkValue | string |  |
| ddmCode | string |  |
| eligibleForDDSGeneration | boolean |  |
| providerData | ProviderData |  |
| validated | boolean |  |
