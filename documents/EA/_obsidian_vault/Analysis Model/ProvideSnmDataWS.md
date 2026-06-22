---
type: Interface
stereotype: "external interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization"
domain: "Analysis Model"
element_id: 1805337
diagrams: 1
connections: 7
tags:
  - interface
  - analysis-model
---

# 🔶 ProvideSnmDataWS

> **Type**: Interface · **Stereotype**: «external interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization

## 📝 Notes

This web service provides data about sales network .

## 🔗 Connections (7)

- → Dependency «use»: [[{MOD}GetSalesroomDataResponse]]
- → Dependency «use»: [[GetEntityDataRequest]]
- → Dependency «use»: [[GetEntityDataRequest]]
- → Dependency «use»: [[{MOD}GetPartnerDataResponse]]
- → Dependency «use»: [[{MOD}GetUserDataResponse]]
- → Dependency «use»: [[GetEntityDataRequest]]
- ← Dependency: [[09.901 Process SNM synchronization (UseCase 1848130)]]

## 📊 Appears In (1 diagrams)

- Logical: Consumed Web service ProvideSNMDataWS
