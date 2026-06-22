---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1585834
diagrams: 13
connections: 6
tags:
  - class
  - requirements-model
---

# 🔷 DMS File

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

Entity holds information about data of file which was stored/uploaded to system.

## 🔗 Connections (6)

- ← Association: [[{ADD}Document DMS File]]
- → Association: [[User (Class 1572279)]]
- → Association: [[DMS File]]
- ← Association: [[DMS File]]
- ← Association: [[TempAppl DMS File]]
- ← Association: [[Agreement (Class 1879570)]]

## 📊 Appears In (13 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: CEL Rewards request
- Logical: Common - Uploaded document
- Logical: Contract
- Logical: Contract - Document
- Logical: Contract Management
- Logical: Document 
- Logical: Early repayment request
- Logical: Loan Service Request domain
- Logical: Logical Data Model - Contract Signing
- Logical: Payment holiday request
- Logical: Printing an Installment schedule
- Logical: Temporary Application - document

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contract Supplement Code | string |  |
| Content | BLOB |  |
| Contract Code | string |  |
| External ID | String(100) |  |
| File Name | String(255) |  |
| Metadata Type | string |  |
| Path | string |  |
| Upload In Progress Flag | Boolean |  |
| User Name | string |  |
