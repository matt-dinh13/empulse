---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1771459
diagrams: 5
connections: 10
tags:
  - class
  - requirements-model
---

# 🔷 TempAppl Document

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

Document provided by client as entered on application form.

## 🔗 Connections (10)

- ← Aggregation: [[TempAppl Document Verification]]
- → Dependency: [[Photo Taking Result (Enumeration 1822517)]]
- → Dependency: [[Document Type (Class 1877882)]]
- → Aggregation: [[{MOD}Temporary Application]]
- → Dependency: [[{MOD}Check Moment Type]]
- ← Aggregation: [[TempAppl DMS File]]
- ← Aggregation: [[{MOD}TempAppl Document Photo Validation]]
- → Association: [[TempAppl Document Content]]
- ← Association: [[TempAppl Document Attribute]]
- → Aggregation: [[TempAppl Person]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: Temporary Application - detail
- Logical: Temporary Application - document
- Logical: Temporary Application - overview
- Logical: Temporary Application - Person and Employment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Document file | blob |  |
| File Name | string |  |
| Note | Text |  |
| Removable | Boolean |  |
| Type | Document Type |  |
| When Created | {MOD}Check Moment Type |  |
| Photo Taking Result | Photo Taking Result |  |
| UUID | string |  |
