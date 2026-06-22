---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833425
diagrams: 15
connections: 10
tags:
  - requirement
  - analysis-model
---

# 📋 Deactivate contract early termination requests

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

The rule describes how to deactivate a loan service request of FER, PER, CET, COP types

Steps:

	
- System search for the Loan Service Request having Request Type in (FER, PER, CET, COP) and Current Status = 'CREATED' and related to the processed Contract
	
- System deactivates the found Loan Service Requests:
- Current Status = 'CANCELLED'; and creates respective record in related Loan Service Request Status Transition entity
- {ADD KZTST-6164}System generates LoanServiceRequestCancelledSE system event with Contract and Loan Service Request as parameters{/ADD}

## 🔗 Connections (10)

- ← Dependency: [[01.797 Create ContractPayholRequest service]]
- ← Dependency: [[08.355 Create request for payment holiday (UseCase 1862152)]]
- ← Dependency: [[{MOD}08.405 Confirm offer for loan restructuring common]]
- ← Dependency: [[{MOD}08.062 Create request for change due date]]
- ← Dependency: [[{MOD}08.273 Create CET request common]]
- ← Dependency: [[{MOD}08.257 Create Cooling-off period request]]
- ← Dependency: [[08.051 Create PER request common]]
- ← Dependency: [[{MOD}08.210 Check and process Gift payment]]
- ← Dependency: [[01.795 Create ContractCHDDRequest service (UseCase 1869792)]]
- ← Dependency: [[03.052 Create Full Early repayment request (UseCase 1879643)]]

## 📊 Appears In (15 diagrams)

- Custom: Business Rules
- Use Case: CHDDR request creation - externally
- Use Case: CHDDR request creation - via GUI
- Use Case: Contract Early Termination request creation
- Use Case: Cooling-off period request
- Use Case: Full early repayment - printouts
- Use Case: Full early repayment request - externally
- Use Case: Full early repayment request - via GUI
- Use Case: Gift payment processing
- Use Case: Loan restructuring request creation - externally
- Use Case: Loan restructuring request creation - via GUI
- Use Case: Payment holiday request creation - externally
- Use Case: Payment holiday request creation - via GUI
- Use Case: PER request creation - externally
- Use Case: PER request creation - via GUI
