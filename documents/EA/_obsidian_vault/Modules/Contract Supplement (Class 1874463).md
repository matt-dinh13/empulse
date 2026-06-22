---
type: Class
stereotype: "historization"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Logical Data Model"
domain: "Modules"
element_id: 1874463
diagrams: 1
connections: 10
tags:
  - class
  - modules
---

# 🔷 Contract Supplement

> **Type**: Class · **Stereotype**: «historization»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Logical Data Model

## 📝 Notes

The entity presents an object of supplement that is created to respective contract and possibly to a contract service. The Contract Supplement is created on basis of a Supplement definition.

Note: Attribute Printed_Documentation is excluded from historization (i.e. printed PDF files does not historicized).

## 🔗 Connections (10)

- ← Aggregation: [[Contract Supplement Custom Data (Class 1874473)]]
- → Dependency: [[Contract Supplement Status Type (Class 1874475)]]
- ← Generalization: [[Account Transaction Supplement (Class 1874469)]]
- ← Aggregation: [[Contract Supplement Status Transition (Class 1874474)]]
- → Dependency: [[Contract (Class 1873952)]]
- → Association: [[Supplement (Class 1874481)]]
- ← Aggregation: [[Contract Supplement Registration Status Transition (Class 1874468)]]
- → Usage: [[Request Source Id (Class 1874464)]]
- ← Aggregation: [[Contract Supplement Document (Class 1874471)]]
- ← Aggregation: [[Client Supplement Document (Class 1874466)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Supplement - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Documentation Preparation Date | Date Time |  |
| Code | string |  |
| Request Source | Request Source Id |  |
| Registration Status | Registration Status |  |
| Status | Contract Supplement Status Type |  |
| Date Sent to Evaluation | Date Time |  |
| Application Code | string |  |
| Created by | User |  |
| Created date | Date Time |  |
| Registration Way Request | string |  |
| Contract Code | string |  |
| Cancellation Timeout | Date Time |  |
| {ADD}Account Number | string |  |
| Marketing Offer Id | string |  |
| Signed Date | Date Time |  |
