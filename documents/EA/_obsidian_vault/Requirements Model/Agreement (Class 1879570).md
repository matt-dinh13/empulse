---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1879570
diagrams: 4
connections: 4
tags:
  - class
  - requirements-model
---

# 🔷 Agreement

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

Agreement signed by client during applying for the loan.

## 🔗 Connections (4)

- ← Association: [[{MOD}Contract (Class 1879596)]]
- → Association: [[DMS File]]
- → Association: [[Agreement Data Source]]
- ← Aggregation: [[Agreement Verification]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: Contract
- Logical: Contract Management
- Logical: Logical Data Model - Contract Signing

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | boolean |  |
| Printed Contract (PDF) | blob |  |
| Valid To | date |  |
