---
type: Class
stereotype: "class"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Supplement definition/Logical Data Model"
domain: "Modules"
element_id: 1874543
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 Printout Template

> **Type**: Class · **Stereotype**: «class»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Supplement definition/Logical Data Model

## 📝 Notes

This entity defines printout templates that can be used for printing of documents.
Its a mirror of selected printout templates on PrintServer side.
To be used printout templates have to be assigned to particular document types. 

For some printouts (see the specific names in list of attributes) the internal code (PrintoutTemplate.Code) is hard coded.

## 🔗 Connections (1)

- ← Usage: [[Supplement Document Type]]

## 📊 Appears In (1 diagrams)

- Logical: Supplement definition - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| External Code | Shorttext |  |
| Pre Printed | Boolean | No |
| Sort order | integer |  |
| Active | Boolean | true |
