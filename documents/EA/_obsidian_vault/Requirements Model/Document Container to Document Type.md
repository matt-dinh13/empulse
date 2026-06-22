---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1485209
diagrams: 2
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 Document Container to Document Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

This entity specifies which document types belongs to which container and at which time period.

## 🔗 Connections (3)

- → Aggregation: [[Document Container (Class 1485210)]]
- → Dependency: [[Document Type (Class 1877882)]]
- → Dependency: [[Photo Acquiring Type]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: Document Container

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Document Type | Document Type |  |
| Valid From | datetime |  |
| Valid To | datetime |  |
| Photo Acquiring Method | Photo Acquiring Type |  |
