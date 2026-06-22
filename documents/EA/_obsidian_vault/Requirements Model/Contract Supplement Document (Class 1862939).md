---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1862939
diagrams: 6
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 Contract Supplement Document

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

It keeps objects of documents that are created for the supplements.

## 🔗 Connections (2)

- → Dependency: [[Document (Class 1879966)]]
- → Aggregation: [[Contract Supplement (Class 1862126)]]

## 📊 Appears In (6 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: Card Balance Transfer Supplement - Logical Domain Model
- Logical: Collection tool operation domains
- Logical: Contract Supplement registration domain
- Logical: Contract Supplements
- Logical: Transaction Supplement domain - Logical data model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Signature Required | boolean |  |
| Archived | Boolean |  |
| Document Uuid | string |  |
| Document Type Code | string |  |
