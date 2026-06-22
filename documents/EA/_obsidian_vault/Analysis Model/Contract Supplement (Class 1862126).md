---
type: Class
stereotype: "historization"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Logical Domain Model"
domain: "Analysis Model"
element_id: 1862126
diagrams: 10
connections: 16
tags:
  - class
  - analysis-model
---

# 🔷 Contract Supplement

> **Type**: Class · **Stereotype**: «historization»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Logical Domain Model

## 📝 Notes

The entity presents an object of supplement that is created to respective contract and also possibly to a contract service. The supplement is created on basis of a Service Type definition (version).
It can contain information about supplement Documents, result of approval process and additional data collected within supplement origination.

Note: Attribute Printed_Documentation is excluded from historization (i.e. printed PDF files does not historicized).

## 🔗 Connections (16)

- ← Generalization: [[Credit Limit Change Contract Supplement]]
- → Association: [[Salesroom (Class 1556394)]]
- ← Aggregation: [[Contract Supplement Scoring]]
- ← Aggregation: [[Contract Supplement Custom Data]]
- ← Aggregation: [[Contract Supplement Registration Status Transition]]
- → Association: [[Contract Service (Class 1868570)]]
- → Association: [[Supplement (Class 1879282)]]
- → Association: [[Salesman (Class 1556402)]]
- ← Aggregation: [[Client Supplement Document]]
- → Dependency: [[Contract Supplement Status Type (Class 1862124)]]
- ← Aggregation: [[Contract Supplement Status Transition]]
- → Dependency: [[Registration Status]]
- ← Aggregation: [[Contract Supplement Document (Class 1862939)]]
- ← Association: [[Loan Service Request (Class 1868549)]]
- ← Generalization: [[Account Transaction Supplement (Class 1874469)]]
- → Aggregation: [[{MOD}Contract (Class 1879596)]]

## 📊 Appears In (10 diagrams)

- Logical: Card Balance Transfer Supplement - Logical Domain Model
- Logical: Change in Contract Supplement domain model
- Logical: Collection tool operation domains
- Logical: Contract Supplement registration domain
- Logical: Contract Supplements
- Logical: Contract tracking
- Logical: CSI-1740 - Update TransactionSupplement domain
- Logical: Loan restructuring request domain
- Logical: Transaction Supplement authorization method
- Logical: Transaction Supplement domain - Logical data model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Documentation Preparation Date | Date Time |  |
| Printed Documentation | LOB |  |
| Code | string |  |
| Registration Status | Registration Status |  |
| Status | Contract Supplement Status Type |  |
| Date Sent to Evaluation | Date Time |  |
| Created by | User |  |
| Created date | Date Time |  |
| Registration Way Request | string |  |
| Cancellation Timeout | Date Time |  |
