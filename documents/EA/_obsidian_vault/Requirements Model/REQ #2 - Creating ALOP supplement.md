---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)"
domain: "Requirements Model"
element_id: 1612003
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #2 - Creating ALOP supplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)

## 📝 Notes

Goal of this requirement is creating ALOP contract supplement via a web service and possibility of cancel it. 
Steps of the Expected CLM support of the ALOP process are to be covered: 1 - 3

Expose API for getting requests for ALOP
- Input data needed to create ALOP transaction request: 

	
- CUID
	
- Applicant Id
	
- Contract code
	
- reference to chosen variant stored in Sales Quote Storage (SQS),
	
- reference to PRELIM scoring evaluation (previousRequestId)
	
- recipient bank account for disbursement of cash (or type of payment channel) with following attributes:
--- bankBranchSyncCode = Bank Branch.Synchronization Code by form.Bank account panel.Bank branch
--- bankCode = Bank.Code referenced to bankBranchCode
--- bankAccountNumber = form.Bank account panel.Account number
--- type = form.Bank account panel.Account type.Code (if it is required by country)
--- holderName = form.Bank account panel.Account holder name (if it is required by country)
--- loanPurposeCode = form.LoanPurpose (code of the selected item)


The ALOP request validation
What all must be validated: CUID, Applicant Id, Contract code, reference to chosen variant stored in Sales Quote Storage (SQS), Bank code, Bank Branch code

Changes tagged in the SD as CLM-3207

Planned development: Sprint #81

## 🔗 Connections (1)

- → Generalization: [[ALOP Process description of CLM part support]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-244 (CLM-971) Cash on card with separate limit (ALOP)
