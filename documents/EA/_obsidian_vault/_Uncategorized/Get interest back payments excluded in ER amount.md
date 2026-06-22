---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1874491
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Get interest back payments excluded in ER amount

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

{ADD DFPH-302}{PH only}
Input parameters:
- contract code
- ER due date

Output parameters:
- ExcludedInterestBackAmount

Steps:

	
- System find created loan service request for Interest back service (contract -> loanServiceRequest where loanServiceRequest.currentStatus = CREATED and loanServiceRequest.requestType = IBACK). If no request found, set ExcludedInterestBackAmount = 0. Else continue with next step.
	
- System check existence of unprocessed interest back incoming payment request (incPaymentRequest.status = W or R and paymentType = IB). If such request exist, return error "UNPROCESSED_PAYMENT_REQUEST" and use case ends. Else continue by next step.
	
- System finds successfully evaluated interest back periods related to installments after ER due date (contract -> loanServiceRequest ->  interestBackPeriod.status = EVALUATED and statusReason = OK and relatedInstallmentDueDate >= ER due date). If no period is found, set IncludedInterestBackAmount = 0.
	
- System finds active and paired related payments (incomingPayment.status = A and pairingStatus = P) by relatedPaymentDataExhangeID and relatedPaymentSourceSystem for interest back periods found in previous step. 
	
- System calculates ExcludedInterestBackAmount = sum of incomingPayment.amount of incoming payments found in previous step.
	
- Retuns ExcludedInterestBackAmount.
