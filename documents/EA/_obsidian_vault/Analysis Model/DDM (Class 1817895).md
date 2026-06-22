---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2"
domain: "Analysis Model"
element_id: 1817895
diagrams: 7
connections: 11
tags:
  - class
  - analysis-model
---

# 🔷 DDM

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2

## 🔗 Connections (9)

- → Realisation: [[14.432 POST DDM (Create and validate direct debit mandate) (UseCase 1817863)]]
- → Usage: [[GetDDMResponse (Class 1817904)]]
- → Usage: [[CreateDDMResponse (Class 1817905)]]
- ← Aggregation «Path»: [[DDMOrDraft]]
- ← Aggregation «Path»: [[Draft (Class 1817897)]]
- → Realisation: [[14.431 GET DDM (Get direct debit mandates based on filters) (UseCase 1817862)]]
- ← Aggregation «Path»: [[ValidateDDM]]
- → Dependency: [[{MOD}CreateDDMRequest]]
- → Aggregation «Path»: [[BSL (Class 1817880)]]

## 📊 Appears In (7 diagrams)

- Logical: DirectDebitMandateRestV2
- Logical: DirectDebitMandateRestV2 - CreateDDM
- Logical: DirectDebitMandateRestV2 - CreateDDMDraft
- Logical: DirectDebitMandateRestV2 - GetDDM
- Logical: DirectDebitMandateRestV2 - UpdateDDMOrDraft
- Logical: DirectDebitMandateRestV2 - UpdateECSProvider
- Logical: DirectDebitMandateRestV2 - ValidateDDM
