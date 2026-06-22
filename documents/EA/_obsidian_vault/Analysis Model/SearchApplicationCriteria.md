---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23"
domain: "Analysis Model"
element_id: 1768227
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 SearchApplicationCriteria

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23

## 🔗 Connections (3)

- → Dependency: [[SearchApplicationEvent]]
- → Dependency: [[StatusFilter]]
- ← Dependency: [[SearchApplicationRequest]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v23 - SearchApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cuid | long |  |
| statuses | StatusFilter |  |
| event | SearchApplicationEvent |  |
