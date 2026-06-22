---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS_NG)/Interface Provided/Web Service/Document Instance Services/COMMON for Interface Model_v2"
domain: "Modules"
element_id: 1856961
diagrams: 3
connections: 3
tags:
  - class
  - modules
---

# 🔷 DocumentFileRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Interface Provided/Web Service/Document Instance Services/COMMON for Interface Model_v2

## 📝 Notes

Structure for Document file (DMSFile) definition

## 🔗 Connections (3)

- → Dependency: [[{ADD}FileCustomData (Class 1856966)]]
- ← Dependency: [[CreateDocumentFileRequest (Class 1856967)]]
- ← Dependency: [[CreateDocumentRequest (Class 1856968)]]

## 📊 Appears In (3 diagrams)

- Logical: COMMON for Interface Model
- Logical: CreateDocument
- Logical: CreateDocumentFile

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| fileTypeCode | string |  |
| pageSpecificationCode | string |  |
| fileUuid | string |  |
| fileContent | stream |  |
| fileName | string |  |
| filePartName | string |  |
| fileCustomData | {ADD}FileCustomData |  |
