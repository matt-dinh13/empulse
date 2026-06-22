---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1877886
diagrams: 5
connections: 9
tags:
  - class
  - requirements-model
---

# 🔷 Document Type Attribute

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

This entity contains definition of attributes (and their properties) for particular document types.

## 🔗 Connections (9)

- ← Dependency: [[TempAppl Document Attribute]]
- ← Association: [[Behavior Rule (Class 1877889)]]
- → Dependency: [[Custom Data Definition (Class 1243901)]]
- → Dependency: [[Logical Data Type]]
- ← Association: [[Behavior Rule (Class 1877889)]]
- → Realisation: [[LOR-593 Aadhaar unavailability solution]]
- → Association: [[Document Attribute Usage Type (Enumeration 1877885)]]
- → Aggregation: [[Document Type (Class 1877882)]]
- ← Association: [[Document Attribute (Class 1879962)]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: Document 
- Logical: Document Type
- Logical: Product Management
- Logical: Temporary Application - document

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Active Flag | Boolean | true |
| Code | Code |  |
| Custom Data Definition Code | Custom Data Definition |  |
| Description | Text |  |
| Logical Datatype Code | Logical Data Type |  |
| Name | Text |  |
| Required | Boolean |  |
| Sort Order | Number |  |
| Validation Group Code | Custom Data Definition |  |
| Visible | boolean |  |
