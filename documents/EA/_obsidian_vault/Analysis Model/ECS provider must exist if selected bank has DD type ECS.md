---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/Product"
domain: "Analysis Model"
element_id: 1787140
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 ECS provider must exist if selected bank has DD type ECS

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/Product

## 📝 Notes

If bank selected for DDM has Bank.DDType = ECS, then must exist at least one valid record in ECSProvider enum where ECSProvider.ECSProviderType = ECS.

MSG_DDMBankAccountWrongECSSetting  (e.g. Chosen bank for DD has set direct debit type on ECS, but no ECS provider exists within the system.)

## 🔗 Connections (1)

- ← Dependency: [[DDM bank setting]]

## 📊 Appears In (1 diagrams)

- Custom: Product validation
