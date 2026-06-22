---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8844 Provide annuity of CEL before signing/LOR-9007 Create installment schedule when offer chosen for application"
domain: "Requirements Model"
element_id: 1878447
diagrams: 1
connections: 6
tags:
  - requirement
  - requirements-model
---

# 📋 Generate offer installment

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8844 Provide annuity of CEL before signing/LOR-9007 Create installment schedule when offer chosen for application

## 📝 Notes

System calls API of external IS generator module and stores the installment schedule to IS management module. When global parameter saveOfferInstallmentsInternally = TRUE, system also stores installment data internally (to DB).

## 🔗 Connections (6)

- ← Dependency: [[08.110 Select insurance services (UseCase 1819535)]]
- ← Dependency: [[{MOD}02.830 Recalculate Product Offers for External system]]
- ← Dependency: [[Application Processing]]
- ← Dependency: [[01.158 Accept offer (UseCase 1827719)]]
- ← Dependency: [[01.167 Accept offer externally (UseCase 1827726)]]
- ← Dependency: [[01.311 Update offer to application and evaluate (UseCase 1879293)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9007 Create installment schedule when offer chosen for application
