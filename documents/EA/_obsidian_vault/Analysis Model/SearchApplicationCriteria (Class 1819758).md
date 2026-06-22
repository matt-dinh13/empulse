---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22"
domain: "Analysis Model"
element_id: 1819758
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 SearchApplicationCriteria

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22

## 🔗 Connections (3)

- → Dependency: [[StatusFilter (Class 1819799)]]
- → Dependency: [[SearchApplicationEvent (Class 1819745)]]
- ← Dependency: [[SearchApplicationRequest (Class 1819695)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v22 - SearchApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cuid | long |  |
| statuses | StatusFilter |  |
| event | SearchApplicationEvent |  |
