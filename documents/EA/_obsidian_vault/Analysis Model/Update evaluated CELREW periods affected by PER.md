---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model"
domain: "Analysis Model"
element_id: 1852422
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Update evaluated CELREW periods affected by PER

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model

## 📝 Notes

{ADD IS-2432}
PH only

Update of CELREW evaluated periods which are affected by Partial early repayment evaluation when CELREW service has set Postpone for PER = TRUE.

Input parameters:
- Contract code
- Early repayment date

Steps:

	
- System find all evaluated CELREW periods evaluated (evaluation date is not null) as contract -> loanServiceRequest (type CELREW) -> celrewEvaluatedPeriod where startInstallmentDueDate >= Early repayment date
	
- For all CELREW periods found in previous step, system finds reward payments (contract -> incomingPayment.status = A, incomingPayment.pairingStatus = P, incomingPayment.paymentType = REW, incomingPayment.amount = celrewEvaluatedPeriod.chargedAmount, incomingPayment.depositDate = celrewEvaluatedPeriod.evaluationDate) and asks for incoming payment cancellation by calling PaymentManagementWS.CancelIncomingPayment() with CancelIncomingPaymentRequest with the following parameters:
- payment.paymentCode = incomingPayment.dataExchangeID
- payment.sourceSystem = incomingPayment.sourceSystem
	
- Set all found CELREW periods as not evaluated:
- charged amount = null
- charged currency = null
- charged tariff item code = null
- evaluation date = null
- charged reward paid to = null
{/ADD}
- {DEL IS-2453 }evaluation reason = null {/DEL}
{ADD IS-2453} 
- activeYN = 0
- evaluation reason = MSG_CELRewardPeriodCancelled
{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[08.603 Update CEL reward evaluated period]]

## 📊 Appears In (1 diagrams)

- Use Case: CEL Rewards 
