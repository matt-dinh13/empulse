---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Application Rest/Offer operations"
domain: "Analysis Model"
element_id: 1822915
diagrams: 11
connections: 19
tags:
  - class
  - analysis-model
---

# 🔷 Application

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Application Rest/Offer operations

## 🔗 Connections (19)

- → Dependency: [[Update (Class 1873214)]]
- → Realisation: [[01.095 Create and evaluate application]]
- → Dependency: [[CreateAndEvaluate]]
- ← Aggregation: [[Card (Class 1873211)]]
- → Usage: [[{MOD}ApplicationDetailRestTO]]
- → Dependency: [[GetApplicationDataProjection]]
- ← Aggregation: [[Evaluate (Class 1773045)]]
- ← Aggregation: [[UserStatistics]]
- ← Aggregation: [[GetAgreement]]
- ← Aggregation: [[Search (Class 1873229)]]
- → Realisation: [[{MOD}01.310 Update application v9]]
- → Aggregation: [[{MOD}Applications]]
- → Realisation: [[01.040 Get application data (UseCase 1879289)]]
- ← Aggregation: [[Cancel (Class 1773043)]]
- ← Aggregation: [[Offer (Class 1819905)]]
- ← Aggregation: [[Sign]]
- ← Aggregation: [[PrepareAgreement]]
- ← Aggregation: [[Relationships (Class 1873227)]]
- ← Aggregation: [[UpdateApproved]]

## 📊 Appears In (11 diagrams)

- Custom: Offer operations
- Custom: Operation
- Logical: Agreement
- Logical: Application
- Logical: Application relationship
- Logical: Application search
- Logical: Card operation
- Logical: Common Rest
- Logical: Create
- Logical: Update
- Logical: UpdateApproved
