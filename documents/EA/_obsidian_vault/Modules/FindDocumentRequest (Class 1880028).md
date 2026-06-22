---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Instance Services/Documents_v2"
domain: "Modules"
element_id: 1880028
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 FindDocumentRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Instance Services/Documents_v2

## 📝 Notes

Request parameters for Find method of the Documents resource

## 🔗 Connections (1)

- ← Dependency: [[Documents (Interface 1880026)]]

## 📊 Appears In (1 diagrams)

- Logical: FindDocument

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
