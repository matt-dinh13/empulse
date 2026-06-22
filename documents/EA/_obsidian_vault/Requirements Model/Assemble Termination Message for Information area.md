---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan"
domain: "Requirements Model"
element_id: 1833574
diagrams: 4
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Assemble Termination Message for Information area

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan

## 📝 Notes

The rule describes assembling an information message for user to show basic data for insurance termination
Input:

	
- ServiceCode
	
- CurrentMonthlyInstallmentAmount
	
- FutureMonthlyInstallmentAmount


Output:

	
- InformationAreaMessage


Steps:
InformationAreaMessage = MSG_CELInsuranceServiceToTermination (e.g. "You request to TERMINATE your additional protection ${ServiceCode}.") & <CRLF>
InformationAreaMessage = InformationAreaMessage & MSG_CELInsuranceCurrentInstallment (e.g. "Your current monthly installment = ${currency} ${CurrentMonthlyInstallmentAmount}.)& <CRLF>
{ADD CLM-5981}If Contract Type = CEL, then{/ADD} InformationAreaMessage = InformationAreaMessage & MSG_CELInsuranceFutureInstallment (e.g. "Your future monthly installment = ${currency} ${FutureMonthlyInstallmentAmount}.)& <CRLF>&<CRLF>
{ADD CLM-5981}If Contract Type = SAI, then InformationAreaMessage = InformationAreaMessage & MSG_SAIInsuranceFinalInstallment (e.g. "Your final installment = ${currency} ${FutureMonthlyInstallmentAmount}.)& <CRLF>&<CRLF>{/ADD}
InformationAreaMessage = InformationAreaMessage & MSG_CELInsuranceTerminationQuestion (e.g. "Are you sure want to process TERMINATION?")

## 🔗 Connections (1)

- ← Dependency: [[11.121 Terminate insurance contract manually (UseCase 1878971)]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan
- Use Case: CLM-5981 Termination of the SAI with installments
- Use Case: Contract insurance termination
- Use Case: Termination of Insurance contract options
