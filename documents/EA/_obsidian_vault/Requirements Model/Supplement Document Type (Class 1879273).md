---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1879273
diagrams: 6
connections: 7
tags:
  - class
  - requirements-model
---

# 🔷 Supplement Document Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

The entity keeps definitions of document types for respective supplement type created by system.
The document instance is created at a moment defined in Supplement Document Required Moment.
The document printout instance is created at a moment defined in Supplement Document Print Moment.

## 🔗 Connections (7)

- → Dependency «use»: [[Product Transaction Type]]
- → Aggregation: [[Supplement (Class 1879282)]]
- → Dependency: [[Signature Requirement Type (Enumeration 1879283)]]
- → Association: [[Printout Template]]
- ← Aggregation: [[Supplement Document Print Moment]]
- → Usage: [[Document Type (Class 1877882)]]
- ← Aggregation: [[Supplement Document Required Moment (Class 1879269)]]

## 📊 Appears In (6 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: Supplement Definition
- Logical: Supplement definition domain - Logical data model
- Logical: Supplement definition for Collection tool service
- Logical: Supplement definition for Credit limit change
- Logical: Supplement definition for Loan restructuring

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Document Type Code | Document Type |  |
| Signature Requirement | Signature Requirement Type |  |
| Number of copies | Number |  |
| Archived | boolean |  |
| Data Source Code | string |  |
| Assign To Contract | boolean |  |
