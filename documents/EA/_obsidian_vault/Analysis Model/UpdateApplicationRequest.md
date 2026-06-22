---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23"
domain: "Analysis Model"
element_id: 1768182
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 UpdateApplicationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23

## 📝 Notes

Request to update data of pre-approved application.

## 🔗 Connections (3)

- → Generalization «XSDextension»: [[RequestBase (Class 1822196)]]
- → Dependency: [[{MOD}Application]]
- ← Dependency: [[ApplicationManagementWS_v23]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v23 - UpdateApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| applicationCode | string |  |
| applicationData | Application |  |
