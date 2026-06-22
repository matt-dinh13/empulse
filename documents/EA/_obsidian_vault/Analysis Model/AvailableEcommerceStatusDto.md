---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardTypeWS"
domain: "Analysis Model"
element_id: 1187985
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 AvailableEcommerceStatusDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardTypeWS

## 📝 Notes

{ADD PBR-1230 /}
Available e-commerce statuses

## 🔗 Connections (2)

- ← Dependency «use»: [[GetEcommerceStatusesForCardtypeResponse]]
- → Dependency «use»: [[EcommerceStatusDto]]

## 📊 Appears In (1 diagrams)

- Logical: CardTypeWS.GetEcommerceStatusesForCardtype

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| status | EcommerceStatusDto |  |
| restrictionLevel | EcommerceRestrictionLevel |  |
