---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13063 (CSI-631) Set up Loan Purpose & Registration process for ALOP"
domain: "Requirements Model"
element_id: 1615821
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 General list of requirements involved in this solution design

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13063 (CSI-631) Set up Loan Purpose & Registration process for ALOP

## 📝 Notes

There is mentioned a list of partial requirements for the task:

	
- REQ #1: Create an ALOP transaction detail screen (general screen for any REL transaction related to the contract supplement
	
- REQ #1: Tab-Contract supplements - List of contract supplements grid: Add action button for launching ALOP transaction detail screen
	
- REQ #1: Check Tab - Collection tools requests - Loan Service Request supplements for registration grid: Launching the Registration screen is only possible for ContractSupplements related to a LoanServiceRequest
	
- REQ #1: Launching ALOP registration from ALOP transaction detail screen/ List of contract supplements grid
	
- REQ #2: The registration can be either manual, or automatic. Decision of the registration process type (manual/automatic) will be controlled by the orchestrator (an external component, e.g. mobile app). The current API for ALOP document acceptation will be used for receiving an info (a flag) about manual/automatic registration. The flag will be stored in ContractSupplement object (DWH?)
	
- REQ #3: Show ALOP documents on the ALOP detail screen
	
- REQ #3: Printing/Download ALOP documents from ALOP transaction detail screen (a list of ALOP documents?). The download should be available within whole contract and contract supplement lifecycle.
	
- Usage of DMS for storing of client's documents collected within origination process

## 🔗 Connections (3)

- ← Generalization: [[REQ #3 - Contract Supplement documents for ALOP]]
- ← Generalization: [[REQ #2 - Registration of ALOP documents]]
- ← Generalization: [[REQ #1 - ALOP transaction detail screen]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-13063 (CSI-631) Set up Loan Purpose & Registration process for ALOP
