---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4"
domain: "Analysis Model"
element_id: 1820648
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}UpdateDocumentRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4

## 📝 Notes

{DEL LOR-9211/}
Request for updating the particular application document.

## 🔗 Connections (3)

- → Dependency: [[{DEL}Document]]
- → Dependency: [[DocumentAttribute (Boundary 1820655)]]
- ← Dependency: [[{DEL}ApplicationDocumentManagementWS_v4 (Interface 1820633)]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}ApplicationDocumentManagementWS_v4 - UpdateDocument

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| applicationCode | string |  |
| document | Document |  |
