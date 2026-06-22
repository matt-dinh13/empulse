---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/{MOD}Interface Consumed/REST/DMS/v2/findDocument"
domain: "Modules"
element_id: 1806805
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 FindDocumentRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/{MOD}Interface Consumed/REST/DMS/v2/findDocument

## 📝 Notes

Request parameters for Find method of the Documents resource

## 🔗 Connections (2)

- ← Dependency: [[findDocument (Class 1806804)]]
- ← Dependency: [[Documents (Interface 1806813)]]

## 📊 Appears In (1 diagrams)

- Logical: findDocument

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| attributeCode | DocumentAttribute |  |
| attributeValue | string |  |
| typeCode | string |  |
| documentUuids | string |  |
| documentFlag | string |  |
| fileUuids | string |  |
| limit | int |  |
| offset | int |  |
| {ADD}projections | DocumentAttribute |  |
