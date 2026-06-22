---
type: Class
stereotype: "input"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Sales Network/Communication Model"
domain: "Modules"
element_id: 815941
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 SELLERPLACE130

> **Type**: Class · **Stereotype**: «input»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Sales Network/Communication Model

## 📝 Notes

Informs OBS about new or changed salesroom.

## 🔗 Connections (5)

- → Dependency «use»: [[SELLERPLACE130 Status]]
- → Dependency «use»: [[CommResult]]
- → Dependency «use»: [[SELLERPLACE130 Type Sellerplace]]
- ← Dependency «transformation»: [[PartnerRequest]]
- ← Dependency «transformation»: [[{MOD}PartnerRequest]]

## 📊 Appears In (1 diagrams)

- Logical: Sales Network - Communication model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | number |  |
| Sellerplace code | string |  |
| Account name | string |  |
| Activity end | date |  |
| Activity start | date |  |
| Bankcode | string |  |
| Bin | string |  |
| Id result190 | number |  |
| Kbe | string |  |
| Name | string |  |
| Note | string |  |
| Num account | string |  |
| Result code | CommResult |  |
| Status | SELLERPLACE130 Status |  |
| Stop payfrom | date |  |
| Stop payto | date |  |
| Taxnum | string |  |
| Type sellerplace | SELLERPLACE130 Type Sellerplace |  |
| Time stamp | datetime |  |
