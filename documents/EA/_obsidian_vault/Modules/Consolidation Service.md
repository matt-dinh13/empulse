---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/CONS"
domain: "Modules"
element_id: 1275209
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 Consolidation Service

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/CONS

## 📝 Notes

This class defines specific parameters of Consolidation service.

## 🔗 Connections (3)

- ← Dependency «mapping»: [[ServiceCONSDataDto]]
- → Dependency: [[Consolidation Type (Enumeration 1275210)]]
- → Dependency: [[Interest and Fee Calculation Method (Enumeration 1275211)]]

## 📊 Appears In (2 diagrams)

- Logical: Consolidation - Setting
- Logical: Service CONS Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CEL POS | boolean | false |
| CEL CASH | boolean | false |
| Consolidation Type | Consolidation Type |  |
| Interest and Fee Calculation Method | Interest and Fee Calculation Method |  |
| Minimal Consolidation Amount | Financial Amount |  |
| Maximal Consolidation Amount | Financial Amount |  |
| Minimal Disbursement Amount | Financial Amount |  |
| Maximal Disbursement Amount | Financial Amount |  |
| Expiration Period Days | integer |  |
| FER Service | code |  |
| Internal Refinancing | boolean | false |
| External Refinancing | boolean | false |
| External Loans Repayment Period Days | integer |  |
