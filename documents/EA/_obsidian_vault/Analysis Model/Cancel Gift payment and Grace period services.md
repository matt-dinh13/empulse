---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833412
diagrams: 3
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Cancel Gift payment and Grace period services

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

The rule describes how to cancel a loan services on contract of GIFTP, GRPER types.

Pre-requisite:

	
- At least one of database global parameters is True:

        - CANCEL_GIFTP_ON_PER_EXE
        - CANCEL_GRPER_ON_PER_EXE

Steps:

	
- System search for the Contract Services  related to the processed Contract having Status = 'ACTIVE' and having Type Code in:

       - if database global parameter CANCEL_GIFTP_ON_PER_EXE = True then GIFTP
      -  if database global parameter CANCEL_GRPER_ON_PER_EXE = True Then GRPER

	
- System cancels the found Contract Services:
- Status = 'CANCELLED'.

       - Status Reason = 'SERVICE_APPLIED'
       - Status Reason Description = 'Automatically canceled after Partial early payment'
       - End Date = current date

## 🔗 Connections (1)

- ← Dependency: [[08.057 Perform Partial early repayment (UseCase 1868459)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: CBL-6572 (CLM-2126) Disable gift payment and grace period when PER is executed
- Use Case: PER request processing
