---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Container/User Interface"
domain: "Analysis Model"
element_id: 1485220
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Selected documents

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Container/User Interface

## 📝 Notes

Displays active documents assigned to container (DocumentContainer2Type.ValidTo >= TODAY or empty).
Multiple selection must be possible.

Localization code:
DOC_Selected

## 🔗 Connections (1)

- → Dependency: [[Only active item can be related]]

## 📊 Appears In (1 diagrams)

- Custom: Set Document Container

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Selected | boolean |  |
| Document Name | string |  |
| Photo Acquiring | Photo Acquiring Type |  |
