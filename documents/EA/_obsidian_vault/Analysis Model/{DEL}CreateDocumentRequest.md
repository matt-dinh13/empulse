---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4"
domain: "Analysis Model"
element_id: 1820639
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}CreateDocumentRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4

## 📝 Notes

{DEL LOR-9211/}
Request for creating an application document.

## 🔗 Connections (2)

- → Dependency: [[{DEL}DocumentFiles]]
- ← Dependency: [[{DEL}ApplicationDocumentManagementWS_v4 (Interface 1820633)]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}ApplicationDocumentManagementWS_v4 - CreateDocument

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| applicationCode | string |  |
| document | DocumentFiles |  |
