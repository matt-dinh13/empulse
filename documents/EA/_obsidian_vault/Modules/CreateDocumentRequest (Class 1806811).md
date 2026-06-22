---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/{MOD}Interface Consumed/REST/DMS/v2/getDocument"
domain: "Modules"
element_id: 1806811
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 CreateDocumentRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/{MOD}Interface Consumed/REST/DMS/v2/getDocument

## 📝 Notes

Request parameters for POST method of the Documents resource

## 🔗 Connections (2)

- ← Dependency: [[Documents (Interface 1806813)]]
- → Dependency: [[DocumentAttributeRequest]]

## 📊 Appears In (1 diagrams)

- Logical: CreateDocument

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| typeCode | string |  |
| attributes | DocumentAttributeRequest |  |
| files | DocumentFile |  |
| creationMoment | string |  |
