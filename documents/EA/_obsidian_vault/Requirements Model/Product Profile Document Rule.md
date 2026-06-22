---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1485263
diagrams: 2
connections: 6
tags:
  - class
  - requirements-model
---

# 🔷 Product Profile Document Rule

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

This class also defines when a contract document (i.e. not delivered by client) is created and when is printed.

## 🔗 Connections (6)

- → Dependency: [[Related To Type]]
- ← Aggregation: [[Profile Document Rule Print Moment]]
- → Dependency: [[Document Type (Class 1877882)]]
- → Aggregation: [[Documentation Configuration (Class 1485265)]]
- ← Aggregation: [[Document Content Check Moment]]
- ← Aggregation: [[Profile Document Rule Check Moment]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: Documentation Configuration

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Valid From | DateTime |  |
| Valid To | DateTime |  |
| Document Type | Document Type |  |
| Related To | Related To Type |  |
