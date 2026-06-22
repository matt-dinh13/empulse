---
type: Requirement
stereotype: "FunctionalRequirement"
package: "HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-16401 (CLM-4621) Post activation docs review - REM - getRegistrationDocuments"
domain: "Modules"
element_id: 1806390
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 CLM-4621  REM - getRegistrationDocuments

> **Type**: Requirement · **Stereotype**: «FunctionalRequirement»
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-16401 (CLM-4621) Post activation docs review - REM - getRegistrationDocuments

## 📝 Notes

New REST API  getRegistrationDocuments:
- Fetch all contract documents IDs by contract code from COMA
- For all document IDs what we got from COMA we are call DMS to get document details
- Return document details only which have CREDIT_DOC flag

## 📊 Appears In (1 diagrams)

- Custom: CBL-16401 (CLM-4621) Post activation docs review - REM - getRegistrationDocuments
