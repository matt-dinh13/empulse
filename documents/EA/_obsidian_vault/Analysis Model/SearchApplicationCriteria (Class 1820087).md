---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21"
domain: "Analysis Model"
element_id: 1820087
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 SearchApplicationCriteria

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21

## 🔗 Connections (3)

- → Dependency: [[SearchApplicationEvent (Class 1820088)]]
- → Dependency: [[StatusFilter (Class 1820063)]]
- ← Dependency: [[SearchApplicationRequest (Class 1820026)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v21 - SearchApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cuid | long |  |
| statuses | StatusFilter |  |
| event | SearchApplicationEvent |  |
