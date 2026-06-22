---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/UMC/SalesNetworkWS"
domain: "Analysis Model"
element_id: 865531
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {ADD} SetUserSalesAreasRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/UMC/SalesNetworkWS

## 📝 Notes

{ADD DRR-418/}

## 🔗 Connections (3)

- → Dependency: [[{ADD} SalesAreaDTO]]
- → Dependency: [[{ADD} EntryIDType]]
- ← Dependency: [[{ADD} SalesNetworkWS]]

## 📊 Appears In (1 diagrams)

- Logical: SalesNetworkWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountID | EntryIDType |  |
| businessAreasToAssign | SalesAreaDTO |  |
