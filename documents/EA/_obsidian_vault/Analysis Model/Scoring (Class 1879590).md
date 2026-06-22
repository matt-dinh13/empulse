---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Logical Data Model"
domain: "Analysis Model"
element_id: 1879590
diagrams: 4
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 Scoring

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Logical Data Model

## 📝 Notes

Information about scoring of the contract.

## 🔗 Connections (8)

- → Aggregation: [[{MOD}Temporary Application]]
- ← Association: [[Contract Supplement Scoring]]
- → Dependency: [[Evaluation Duration Type]]
- → Association: [[Offer Financial Parameter]]
- → Dependency: [[Evaluation Request Status Type]]
- → Aggregation: [[{MOD}Contract (Class 1879596)]]
- → Dependency «use»: [[Scoring Type (Class 1879571)]]
- ← Aggregation: [[Scoring Result (Class 1879561)]]

## 📊 Appears In (4 diagrams)

- Logical: Contract Supplements
- Logical: Loan restructuring request domain
- Logical: Scoring
- Logical: Transaction Supplement domain - Logical data model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Client Informed | Boolean | No |
| Evaluation Duration | Evaluation Duration Type |  |
| Request number | number |  |
| Evaluation Request Status | Evaluation Request Status Type |  |
| Evaluation Request Type | Scoring Type |  |
| Evaluation Request Date | DateTime |  |
