---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1534454
diagrams: 2
connections: 4
tags:
  - class
  - requirements-model
---

# 🔷 Document Processing Configuration

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

Configuration of document processing defines what should be done with a particular document type

## 🔗 Connections (4)

- → Dependency: [[Document Type (Class 1877882)]]
- → Dependency: [[Document Validation Type]]
- → Aggregation: [[Subprocess (Class 1534443)]]
- → Association: [[Document Printout]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: Loan Origination Configuration

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Type | Document Validation Type |  |
| Document Type Code | string |  |
