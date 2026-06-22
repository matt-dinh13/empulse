---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1879557
diagrams: 5
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Deal

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model

## 📝 Notes

Originally, deal was meant to represent a framework agreement/contract with a possibility of having multiple subcontracts. This original idea was not followed and currently there is always one deal for one contract and there are almost no relevant data held on Deal entity.

## 🔗 Connections (5)

- ← Aggregation: [[Client Other Information]]
- → Association: [[Client (Class 1750952)]]
- ← Aggregation: [[{MOD}Contract (Boundary 1771504)]]
- ← Aggregation: [[{MOD}Contract (Class 1879596)]]
- ← Aggregation: [[{MOD}Client Snapshot]]

## 📊 Appears In (5 diagrams)

- Logical: Client management
- Logical: Communication
- Logical: Contract
- Logical: Contract - Document
- Logical: Contract Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Deal code |  |
| Creation Date | DateTime |  |
| CurrentAvailAmount  | num8.3 |  |
| LoanBinOfferFlag | bool |  |
| Status  | Type enum |  |
