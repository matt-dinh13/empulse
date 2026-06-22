---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model"
domain: "Analysis Model"
element_id: 1852416
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Update CELREW periods after other service evaluation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model

## 📝 Notes

{ADD IS-2373}
This rule is checking CELREW periods after other service evaluation - GRPER and FER without request - cancel evaluation of period which were evaluated at the same date as other service and cancellation of reward payment paired to the Overpayment parts.

Input:
- contract
- service code (other service which was evaluated on the contract)

Steps:

	
- System check if the service is terminated (contractService.status = TERMINATED and statusReason = SERVICE_APPLIED where serviceCode = service code from input) - If yes, then continue by next step, else use case ends.
	
- Set Service End Date = contractService.endDate where serviceCode = service code from input
	
- System find all evaluated CELREW periods evaluated (evaluation date is not null) at the date of other service evaluation (contract -> loanServiceRequest -> celrewEvaluatedPeriod where evaluationDate = Service End Date)
	
- For allCELREW periods found in previous step, system finds reward payments (contract -> incomingPayment.status = A, incomingPayment.pairingStatus = P, incomingPayment.paymentType = REW, incomingPayment.amount = celrewEvaluatedPeriod.chargedAmount, incomingPayment.depositDate = celrewEvaluatedPeriod.evaluationDate) and asks for incoming payment cancellation by calling PaymentManagementWS.CancelIncomingPayment() with CancelIncomingPaymentRequest with the following parameters:
- payment.paymentCode = incomingPayment.dataExchangeID
- payment.sourceSystem = incomingPayment.sourceSystem
	
- Set all found CELREW periods as not evaluated:
- charged amount = null
- charged currency = null
- charged tariff item code = null
- evaluation date = null
- charged reward paid to = null
- evaluation reason = null

{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[08.607 Cancel CELREW periods]]

## 📊 Appears In (1 diagrams)

- Use Case: CEL Rewards 
