---
type: Class
stereotype: "historization"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1879966
diagrams: 27
connections: 13
tags:
  - class
  - requirements-model
---

# 🔷 Document

> **Type**: Class · **Stereotype**: «historization»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

This entity represents particular documents related to a loan as well as person (possibly also related to persons defined in the SNM). The document can contain various information defined by Document Attribute (e.g. Number of document, Issue date).

## 🔗 Connections (13)

- ← Association: [[Person Document]]
- ← Association: [[Client Document]]
- ← Association: [[Installment Version Printout]]
- ← Dependency: [[Client Supplement Document]]
- ← Dependency: [[Contract Supplement Document (Class 1862939)]]
- ← Association: [[Loan Service Request Document]]
- ← Association: [[{MOD}DDM Document]]
- ← Association: [[Contract Document (Class 1879592)]]
- → Association: [[Document Type (Class 1877882)]]
- ← Aggregation: [[{ADD}Document DMS File]]
- ← Aggregation: [[Document Verification]]
- ← Aggregation: [[{DEL}Document Proof Check]]
- ← Association: [[Document Attribute (Class 1879962)]]

## 📊 Appears In (27 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: Card Balance Transfer Supplement - Logical Domain Model
- Logical: CEL Rewards request
- Logical: Change due date request
- Logical: Checking Terms of Loan Service Request
- Logical: Client management
- Logical: Collection tool operation domains
- Logical: Common - Person
- Logical: Common - Uploaded document
- Logical: Contract
- Logical: Contract - Document
- Logical: Contract Management
- Logical: Contract registration
- Logical: Contract Service
- Logical: Contract Supplement registration domain
- Logical: Contract Supplements
- Logical: DDM Draft
- Logical: Document 
- Logical: Early repayment request
- Logical: Loan consolidation - Logical Data Model
- Logical: Loan restructuring request domain
- Logical: Loan Service Request domain
- Logical: Logical Data Model
- Logical: Logical Data Model - Contract Signing
- Logical: Payment holiday request
- Logical: Printing an Installment schedule
- Logical: Transaction Supplement domain - Logical data model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | Boolean |  |
| Creation Date | DateTime |  |
| Checked By | User |  |
| Checked Date | DateTime |  |
| Note | String |  |
| Registered Flag | Boolean |  |
| When Created | Check Moment Type |  |
| Photo Taking Result | Photo Taking Result |  |
| External Id | String |  |
| UUID | String |  |
