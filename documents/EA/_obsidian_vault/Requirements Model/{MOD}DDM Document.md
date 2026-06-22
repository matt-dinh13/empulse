---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1869703
diagrams: 5
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}DDM Document

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

Object representing a relation between the direct debit mandate and the document (DDM document) associated with it.

## 🔗 Connections (3)

- → Aggregation: [[DDM Draft]]
- → Association: [[Document (Class 1879966)]]
- → Association: [[DDM (Class 1869699)]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: Contract - DDM
- Logical: Contract - Document
- Logical: Contract Management
- Logical: DDM Draft

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Document UUID | string |  |
| Archived | boolean |  |
