---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833429
diagrams: 9
connections: 7
tags:
  - requirement
  - analysis-model
---

# 📋 Check concurrent active loan services and requests rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

This rule describes checking existence of concurrent active loan service request of types FER, PER, COP, CET on the contract at creating a new request for a loan service application

Input:

	
- Contract
	
- CheckERRequestsOnly = FALSE (optional)


Output:

	
- Result (TRUE/FALSE)
	
- Found Object (Loan Service Request or Contract Service of GP/GR type)


Steps:

	
- Get all active loan services related to the contract (i.e Contract Service having Contract = Contract and Status = Active)
	
- If Contract Service of Type in (FER, PER, COP, CET) is found, check if a request for any service already exists }(i.e. Loan Service Request.ER Request related to Contract and having Current Status = CREATED and Early Repayment Date Tolerance < current date)
- If a request is found a question message is showed (MSG_ERRequestAlreadyExists (e.g.  Another request(s) for early or partial repayment already exist(s) and will be canceled. Do you want to continue?). 
-- If user confirms NO, set Result to FALSE and the check ends, else scenario continues with next steps.
	
- If CheckERRequestsOnly != TRUE and Contract Service of Type Gift payment (GP) and/or Grace period (GR) is found, then: 
- evaluate status of all the services:
-- for GP, call 08.202 Evaluate status of Gift payment use case
-- for GR, call 08.204 Evaluate status of Grace period use case
- A question message (MSG_GP_OR_GRP_ASSIGNED_TO_CONTRACT; e.g. Either Gift payment or Grace period benefit is assigned to contract and will be disabled after the service request creation - continue?) is showed if:
-- a value of W (waiting for fulfillment of conditions) or G (conditions fulfilled) is evaluated
-- database global parameter CANCEL_GIFTP_ON_PER_EXE or CANCEL_GRPER_ON_PER_EXE is True
-- there is a loan services of type  GIFTP, GRPER on processed contract.
If confirms YES, set Result to TRUE, else set Result to FALSE
	
- The check ends

## 🔗 Connections (6)

- ← Dependency: [[08.355 Create request for payment holiday (UseCase 1862152)]]
- ← Dependency: [[08.404 Confirm offer for loan restructuring (UseCase 1862186)]]
- ← Dependency: [[{MOD}08.062 Create request for change due date]]
- ← Dependency: [[{MOD}08.257 Create Cooling-off period request]]
- ← Dependency: [[08.053 Create PER request manually]]
- ← Dependency: [[03.050 Create Full Early repayment request manually]]

## 📊 Appears In (9 diagrams)

- Custom: Business Rules
- Custom: CBL-20284 (CSI-2701) Add Insurance To CEL Contracts
- Custom: CBL-6572 (CLM-2126) Disable gift payment and grace period when PER is executed
- Use Case: CHDDR request creation - via GUI
- Use Case: Cooling-off period request
- Use Case: Full early repayment request - via GUI
- Use Case: Loan restructuring request creation - via GUI
- Use Case: Payment holiday request creation - via GUI
- Use Case: PER request creation - via GUI
