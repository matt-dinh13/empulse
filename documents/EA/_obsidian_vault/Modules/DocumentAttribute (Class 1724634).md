---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Instance Services/COMMON for Interface Model_v2"
domain: "Modules"
element_id: 1724634
diagrams: 4
connections: 2
tags:
  - class
  - modules
---

# 🔷 DocumentAttribute

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Instance Services/COMMON for Interface Model_v2

## 📝 Notes

Structure for Document attribute definition including localization

## 🔗 Connections (2)

- → Usage: [[AttributeChangeHistory (Class 1880024)]]
- ← Dependency: [[Document (Class 1880027)]]

## 📊 Appears In (4 diagrams)

- Logical: COMMON for Interface Model
- Logical: CreateDocument
- Logical: FindDocument
- Logical: GetDocument

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| value | string |  |
| {ADD}historyChanges | AttributeChangeHistory |  |
