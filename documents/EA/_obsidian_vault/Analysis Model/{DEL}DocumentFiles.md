---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4"
domain: "Analysis Model"
element_id: 1820652
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}DocumentFiles

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4

## 📝 Notes

{DEL LOR-9211/}
Entity representing the particular document.

## 🔗 Connections (4)

- → Generalization: [[DocumentBase (Class 1822195)]]
- ← Generalization: [[{DEL}Document]]
- → Dependency: [[Files]]
- ← Dependency: [[{DEL}CreateDocumentRequest]]

## 📊 Appears In (2 diagrams)

- Logical: {DEL}ApplicationDocumentManagementWS_v4 - CreateDocument
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - UpdateDocument

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| files | Files |  |
