---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/COMMON for COMA_NG/Logical Data Model"
domain: "Modules"
element_id: 1873953
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Deal

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/COMMON for COMA_NG/Logical Data Model

## 📝 Notes

Originally, deal was meant to represent a framework agreement/contract with a possibility of having multiple subcontracts. This original idea was not followed and currently there is always one deal for one contract and there are almost no relevant data held on Deal entity.

## 🔗 Connections (2)

- ← Association: [[Client (Class 1873963)]]
- ← Aggregation: [[Contract (Class 1873952)]]

## 📊 Appears In (1 diagrams)

- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Deal code |  |
| Creation Date | DateTime |  |
| CurrentAvailAmount  | num8.3 |  |
| LoanBinOfferFlag | bool |  |
| Status  | Type enum |  |
