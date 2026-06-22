---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4"
domain: "Analysis Model"
element_id: 1820645
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}GetDocumentContentResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4

## 📝 Notes

{DEL LOR-9211/}
Response for successfully retrieved content of particular document.

## 🔗 Connections (2)

- → Dependency: [[Files]]
- ← Dependency: [[{DEL}ApplicationDocumentManagementWS_v4 (Interface 1820633)]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}ApplicationDocumentManagementWS_v4 - GetDocumentContent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| documentType | string |  |
| files | Files |  |
