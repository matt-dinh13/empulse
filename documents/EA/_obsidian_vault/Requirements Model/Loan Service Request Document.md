---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1868545
diagrams: 11
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 Loan Service Request Document

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

Entity of a document related to Loan Service Request. If a printout is defined to the document, there is also reference to DMS file object (reference to storage where the printout is placed).
One Request can aggregate only one Document.

## 🔗 Connections (2)

- → Association: [[Document (Class 1879966)]]
- → Aggregation: [[Loan Service Request (Class 1868549)]]

## 📊 Appears In (11 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: CEL Rewards request
- Logical: Change due date request
- Logical: Checking Terms of Loan Service Request
- Logical: Contract - Document
- Logical: Early repayment request
- Logical: Loan consolidation - Logical Data Model
- Logical: Loan restructuring request domain
- Logical: Loan Service Request domain
- Logical: LSR.Insurance Offer - Logical Data Model
- Logical: Payment holiday request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Document Uuid | string |  |
