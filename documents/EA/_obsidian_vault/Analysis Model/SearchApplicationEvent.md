---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23"
domain: "Analysis Model"
element_id: 1768224
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 SearchApplicationEvent

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23

## 🔗 Connections (2)

- ← Dependency: [[SearchApplicationCriteria]]
- → Dependency: [[ApplicationEventTypes]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v23 - SearchApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesroom | string |  |
| performedBy | string |  |
| performedFrom | date |  |
| performedTo | date |  |
| eventTypes | ApplicationEventTypes |  |
