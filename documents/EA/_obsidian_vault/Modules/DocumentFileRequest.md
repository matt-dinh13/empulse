---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Instance Services/COMMON for Interface Model_v2"
domain: "Modules"
element_id: 1724633
diagrams: 3
connections: 3
tags:
  - class
  - modules
---

# 🔷 DocumentFileRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Instance Services/COMMON for Interface Model_v2

## 📝 Notes

Structure for Document file (DMSFile) definition

## 🔗 Connections (3)

- ← Dependency: [[CreateDocumentFileRequest]]
- → Dependency: [[{ADD}FileCustomData]]
- ← Dependency: [[CreateDocumentRequest (Class 1880022)]]

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
