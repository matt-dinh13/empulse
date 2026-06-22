---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21"
domain: "Analysis Model"
element_id: 1820028
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PrepareDocumentationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21

## 📝 Notes

Prepares documentation materials for the contract identified by given application number.

## 🔗 Connections (2)

- → Generalization «XSDextension»: [[RequestBase (Class 1633342)]]
- ← Dependency: [[ApplicationManagementWS_v21 (Interface 1820000)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v21 - PrepareDocumentation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| applicationCode | string |  |
| maximumValidityOfDocuments | int |  |
