---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-12588 DMS - Integrate Document management component in HoSel system/CLM-4622 Integration to DMS module - COMA - Adjust v12/contracts/documents"
domain: "Modules"
element_id: 1800786
diagrams: 1
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Adjust v12/contracts/documents

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-12588 DMS - Integrate Document management component in HoSel system/CLM-4622 Integration to DMS module - COMA - Adjust v12/contracts/documents

## 📝 Notes

GET v12/contracts/* method should start to return client documents next to contract documents.

POST v12/contracts/documents should start link documents as following:

Get information about document's Document type from DMS module REST API
if Documen type has flag PERSON then document should be linked to contract as client document else like contract document
DELETE v12/contract/xxx/documents/xxx should now also distinguish between contract and client document

## 📊 Appears In (1 diagrams)

- Custom: CLM-4622 Integration to DMS module - COMA - Adjust v12/contracts/documents
