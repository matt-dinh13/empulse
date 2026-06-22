---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1750953
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Person Custom Attribute

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model

## 📝 Notes

List of person's country specific attributes.

Note: Only attributes with not null .Value are stored in this structure. Already existing attributes are completely deleted when being updated with null .Value.

## 🔗 Connections (3)

- → Aggregation: [[{MOD}Client Snapshot]]
- → Dependency: [[Person Custom Attribute Type]]
- → Aggregation: [[{MOD}Temporary Application]]

## 📊 Appears In (2 diagrams)

- Logical: Client management
- Logical: Temporary Application - overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Value | string |  |
