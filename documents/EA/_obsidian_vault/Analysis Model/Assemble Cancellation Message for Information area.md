---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Insurance finishing/Use case model"
domain: "Analysis Model"
element_id: 1833576
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Assemble Cancellation Message for Information area

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Insurance finishing/Use case model

## 📝 Notes

The rule describes assembling an information message for user to show basic data for insurance cancellation
Input:

	
- ServiceCode
	
- CurrentMonthlyInstallmentAmount
	
- FutureMonthlyInstallmentAmount


Output:

	
- InformationAreaMessage


Steps:
InformationAreaMessage = MSG_CELInsuranceServiceToCancel (e.g. "You are request to CANCEL your additional protection ${ServiceCode}.") & <CRLF>
InformationAreaMessage = InformationAreaMessage & MSG_CELInsuranceCurrentInstallment (e.g. "Your current monthly installment = Rp ${CurrentMonthlyInstallmentAmount}.)& <CRLF>
InformationAreaMessage = InformationAreaMessage & MSG_CELInsuranceFutureInstallment (e.g. "Your future monthly installment = Rp ${FutureMonthlyInstallmentAmount}.)& <CRLF>&<CRLF>
InformationAreaMessage = InformationAreaMessage & MSG_CELInsuranceCancelationQuestion (e.g. "Are you sure want to process CANCELLATION?")

## 🔗 Connections (1)

- ← Dependency: [[{MOD}11.111 Cancel insurance contract manually]]

## 📊 Appears In (2 diagrams)

- Use Case: Cancellation of Insurance contract options
- Use Case: Contract insurance cancellation
