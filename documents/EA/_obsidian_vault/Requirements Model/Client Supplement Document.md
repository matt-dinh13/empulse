---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1862123
diagrams: 5
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 Client Supplement Document

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

Documents required from client

## 🔗 Connections (3)

- → Dependency: [[Document (Class 1879966)]]
- → Dependency: [[Request Reason Type (Enumeration 1879266)]]
- → Aggregation: [[Contract Supplement (Class 1862126)]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: Collection tool operation domains
- Logical: Contract Supplement registration domain
- Logical: Contract Supplements
- Logical: Transaction Supplement domain - Logical data model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | boolean |  |
| Delivery Reason | Request Reason Type |  |
| Document Uuid | string |  |
| Document Type Code | string |  |
