---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Integration with document archive/Logical data model"
domain: "Analysis Model"
element_id: 1585835
diagrams: 5
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}Document DMS File

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Integration with document archive/Logical data model

## 📝 Notes

{ADD CLM-3040 /}
DDM Files related to Document

## 🔗 Connections (3)

- → Association: [[{ADD}File Type]]
- → Association: [[DMS File]]
- → Aggregation: [[Document (Class 1879966)]]

## 📊 Appears In (5 diagrams)

- Logical: Common - Uploaded document
- Logical: Contract - Document
- Logical: Document 
- Logical: Early repayment request
- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | Boolean |  |
| File Type | File Type |  |
| Page Specification | string |  |
