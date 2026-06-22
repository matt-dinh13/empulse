---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model"
domain: "Analysis Model"
element_id: 1833421
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Assembling Service cancellation message

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model

## 📝 Notes

{ADD CLM-2053 /}
The rule describes assembling an information message for user to show basic data for a contract service cancellation
Input:

	
- ServiceCode
	
- CurrentMonthlyInstallmentAmount
	
- FutureMonthlyInstallmentAmount


Output:

	
- InformationAreaMessage


Steps:
InformationAreaMessage = MSG_ServiceToCancel (e.g. "You are requesting to CANCEL your ${ServiceCode} service.") & <CRLF>
InformationAreaMessage = InformationAreaMessage & MSG_CELCurrentInstallment (e.g. "Your current monthly installment = Rp ${CurrentMonthlyInstallmentAmount}.)& <CRLF>
InformationAreaMessage = InformationAreaMessage & MSG_CELFutureInstallment (e.g. "Your future monthly installment = Rp ${FutureMonthlyInstallmentAmount}.)& <CRLF>&<CRLF>
InformationAreaMessage = InformationAreaMessage & MSG_CELCancelationQuestion (e.g. "Are you sure to process CANCELLATION?")

## 📊 Appears In (1 diagrams)

- Use Case: Service - Contract Service management via UI
