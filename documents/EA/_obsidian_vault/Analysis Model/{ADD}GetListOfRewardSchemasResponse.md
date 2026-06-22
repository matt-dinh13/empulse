---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system"
domain: "Analysis Model"
element_id: 1031663
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}GetListOfRewardSchemasResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system

## 📝 Notes

{ADD PCG-134/}
Response message for method getListOfRewardSchemas

## 🔗 Connections (3)

- ← Dependency: [[LoyaltyManagementWS]]
- → Dependency: [[{ADD}SchemaType]]
- → Generalization «XSDextension»: [[{ADD}SchemaListType]]

## 📊 Appears In (1 diagrams)

- Logical: LoyaltyManagementWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| schemas | SchemaListType |  |
