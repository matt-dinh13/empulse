---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model"
domain: "Analysis Model"
element_id: 1852415
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Renew CELREW periods

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model

## 📝 Notes

{ADD IS-2323} 
PH only 
This rule is used for reactivation of CELREW periods after service rollback operation -> called from UC 03.301 Rollback service or directly from service rollback mBeans

Steps:

	
- System call API openapi/v1/services/{codeversions} with contractService.serviceCode and contractService serviceVersion to get service parameters - if parameter Automatic evaluation = TRUE then continue with next step, else use case ends.
	
- System check existence of reward loan service request:

         - if loan service request if loan service request with request type = CELREW  has current status = CREATED, then continue with next step
         - else if loan service request (LSR) with request type = CELREW  has current status = CANCELLED, then update  LSR.current status to CREATED 
         - else use case ends.

	
- System find all active CELREW periods (celrewEvaluatedPeriod.ActiveYN = 1) and set start date = latest endInstallmentDueDate  + 1 month  
If no active CELREW period exist, system set start date = contract sign date (Contract -> Financial Parameters.Loan Providing Date)
	
- System call  Calculate all CELREW periods for contract rule with parameters:
-- contract = current contract
-- start date
	
- Use case ends.

{/ADD}

## 🔗 Connections (2)

- → Dependency: [[Calculate all CELREW periods for contract]]
- ← UseCase «include»: [[03.301 Rollback service (UseCase 1874486)]]

## 📊 Appears In (2 diagrams)

- Use Case: CEL Rewards 
- Use Case: Service timeline
