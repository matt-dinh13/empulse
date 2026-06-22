---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Logical Data Model"
domain: "Analysis Model"
element_id: 1827152
diagrams: 3
connections: 11
tags:
  - class
  - analysis-model
---

# 🔷 Insurance Service

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Logical Data Model

## 📝 Notes

Insurance as a service. Contains settings of an insurance for loan products.

This specialization of Service entity will be used for services from service category: Insurance.

## 🔗 Connections (11)

- ← Dependency «mapping»: [[{MOD}ServiceINSURANCEDataDto]]
- → Dependency: [[Early Termination TermType]]
- → Dependency: [[Insurance Program]]
- → Dependency: [[{MOD}First Insurance Period Duration]]
- → Dependency: [[Remaining Fee Calculation]]
- → Dependency: [[{MOD}First Insurance Period Duration]]
- → Dependency: [[Next Insurance Period Duration]]
- → Dependency: [[{MOD}First Insurance Period Trigger]]
- → Dependency: [[{MOD}First Insurance Period Trigger]]
- → Dependency: [[Insurance Premium Refund Type]]
- ← Dependency: [[Insurance Contract (Class 1852795)]]

## 📊 Appears In (3 diagrams)

- Logical: Insurance Contract
- Logical: Insurance Service
- Logical: Service INSURANCE Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Automatic Prolongation | boolean |  |
| First Period Duration | First Insurance Period Duration |  |
| First Period Duration Offset | int |  |
| First Period Trigger | First Insurance Period Trigger |  |
| First Period Trigger Offset | int |  |
| Next Period Duration  | Next Insurance Period Duration |  |
| Next Period Duration Offset | int |  |
| Insurance Program Code | Text |  |
| Max Loan Amount | Financial Amount |  |
| Refund On Manual Termination | Insurance Premium Refund Type |  |
| Terminate On Full Loan Repayment | boolean |  |
| Early Termination Term | Early Termination TermType |  |
| Cut Off Days Count | int |  |
| Term Count Limit | int |  |
| Insurance Cancellation Offset | int |  |
| Insurance Termination Offset | int |  |
| Number Of Billing Periods | int |  |
| Limit cancellation to cooling off period | boolean |  |
| Remaining fee calculation | Remaining Fee Calculation |  |
| Ratio | int |  |
| Coverage Trigger | {MOD}First Insurance Period Trigger |  |
| Coverage Trigger Offset | int |  |
| Coverage Duration | {MOD}First Insurance Period Duration |  |
| Coverage Duration Offset | int |  |
