---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/User Interface"
domain: "Analysis Model"
element_id: 1572147
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 Edit Available Document Types

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/User Interface

## 📝 Notes

List of all Document Types, which are active or already assigned to the salesroom.
Assigned Document Types are initially marked as selected.
User can select/deselect particular Document Type.
When the salesroom is being saved, the selected Document Types are assigned to the salesroom and Types still not selected are marked as archived. 
Default order: Document Type Code, asc

LDM: Salesroom.SalesroomDocumentType
Localization code: SAL_DocumentTypes

## 📊 Appears In (1 diagrams)

- Custom: Create/Update Salesroom

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Selection | string |  |
| Code | string |  |
| Name | string |  |
