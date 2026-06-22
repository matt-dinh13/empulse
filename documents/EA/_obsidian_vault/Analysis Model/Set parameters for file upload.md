---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Integration with document archive/Business rules"
domain: "Analysis Model"
element_id: 1675840
diagrams: 8
connections: 11
tags:
  - requirement
  - analysis-model
---

# 📋 Set parameters for file upload

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Integration with document archive/Business rules

## 📝 Notes

This business rule defines setting of parameter for file upload to document archive.

If contract document is being uploaded (in case when the user uploads a document from GUI):
path = /contractManagement/CUID/contractCode/scans/
metaData = {
- "Contract" : Contract.Code, 
- "CUID" - CUID, 
- "TYPE" - documentType.code (or table name for not-documents), 
- "SYSTEM" - name of system (owner) from which it was uploaded "BSL" 
{ADD CSI-164} - PAGESPECIFICATION - Document DMS File.PageSpecification{/ADD}
}

If a contract printout is being uploaded (in case when is needed to save printed document):
path = /contractManagement/CUID/contractCode/printouts/
metaData = {
- "Contract" : Contract.Code, 
- "CUID" - CUID, 
- "TYPE" - documentType.code, 
- "SYSTEM" - name of system (owner) from which it was uploaded ("BSL")
{ADD CSI-164} - PAGESPECIFICATION - Document DMS File.PageSpecification{/ADD}
}

If a contract supplement printout is being uploaded (in case when is needed to save printed document):
path = /contractManagement/CUID/contractCode/supplementCode/printouts/
metaData = {
- "Contract" : Contract.Code, 
- "Supplement" : Contract Supplement.Code,
- "CUID" - CUID, 
- "TYPE" - documentType.code, 
- "SYSTEM" - name of system (owner) from which it was uploaded ("BSL")
{ADD CSI-164} - PAGESPECIFICATION - Document DMS File.PageSpecification{/ADD}
}

If ticket attachments is being uploaded :
path = /TicketAttchments/TICKET_CODE
metaData = { 
- "SYSTEM" - name of system (owner) from which it was uploaded "BSL" }

## 🔗 Connections (11)

- ← Dependency: [[{MOD}06.051 Process customers notification message]]
- ← Dependency: [[{MOD}06.010 Identify Client]]
- ← Dependency: [[{DEL}01.176 Create document]]
- ← Dependency: [[Application Processing]]
- ← Dependency: [[01.435 Print DDM (UseCase 1876225)]]
- ← Dependency: [[Generate content of agreement]]
- ← Dependency: [[03.045 Generate IS printout (UseCase 1879450)]]
- ← Dependency: [[03.050 Create Full Early repayment request manually]]
- ← Dependency: [[{ADD}01.131 Upload document file - common]]
- ← Dependency: [[01.126 Upload client document file]]
- ← Dependency: [[01.125 Upload contract document]]

## 📊 Appears In (8 diagrams)

- Custom: Business rules
- Custom: CBL-8156 (CSI-164) Integration with Inovatrics - using PageSpecification in GUI (step3a)
- Use Case: CSI-1119 Use DMS in UC 08.356 Generate service request document
- Use Case: DDM confirmation
- Use Case: Document copy management
- Use Case: Generating IS printouts
- Use Case: Generating IS printouts
- Use Case: Take document photo - use case overview
