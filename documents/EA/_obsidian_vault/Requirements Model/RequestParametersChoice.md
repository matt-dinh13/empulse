---
type: Class
stereotype: "XSDchoice"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10337 (CSI-62) Payhol Event Information - Loan Service Request LMS"
domain: "Requirements Model"
element_id: 1855671
diagrams: 6
connections: 11
tags:
  - class
  - requirements-model
---

# 🔷 RequestParametersChoice

> **Type**: Class · **Stereotype**: «XSDchoice»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10337 (CSI-62) Payhol Event Information - Loan Service Request LMS

## 📝 Notes

Parameters of service request by request type. One type is contained in the choice only.

## 🔗 Connections (11)

- → Usage: [[ContractEarlyTerminationRequestParameters]]
- ← Association: [[LoanServiceRequestRequest (Class 1855681)]]
- → Usage: [[PaymentHolidayRequestParametersDto]]
- → Dependency: [[LoanConsolidationRequestParameters]]
- → Dependency «use»: [[switchServiceOperationStatusParametersDto]]
- → Dependency: [[CloseEndLoanRewardParameters]]
- → Usage: [[LoanRestructuringRequestParametersDto]]
- → Usage: [[{ADD}CoolingOffPeriodRequestParameters]]
- → Usage: [[FullEarlyRepaymentRequestParameters]]
- → Dependency «use»: [[ChangeDueDateRequestParametersDto]]
- → Dependency: [[CheckingTermsOfLoanRequestDto]]

## 📊 Appears In (6 diagrams)

- Custom: CBL-10337 (CSI-62) Payhol Event Information - Loan Service Request LMS
- Custom: CBL-9870 (CSI-92) COP Event information - Loan Service Request JMS
- Logical: Loan Service Request notifications
- Logical: Loan Service Request notifications - CEL Rewards
- Logical: Loan Service Request notifications - CET&FER request
- Logical: Loan Service Request notifications - Consolidation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| loanRestructuringRequestParameters | LoanRestructuringRequestParametersDto |  |
| changeDueDateRequestParameters | ChangeDueDateRequestParametersDto |  |
| checkingTermsOfLoanRequestParameters | CheckingTermsOfLoanRequest |  |
| paymentHolidayRequestParameters | PaymentHolidayRequestParametersDto |  |
| loanConsolidationRequestParameters | LoanConsolidationRequestParameters |  |
| closeEndLoanReward | CloseEndLoanRewardParameters |  |
| switchServiceOperationStatusParameters | switchServiceOperationStatusParametersDto |  |
| fullEarlyRepaymentRequestParameters | FullEarlyRepaymentRequestParameters |  |
| contractEarlyTerminationRequestParameters | ContractEarlyTerminationRequestParameters |  |
| {ADD}coolingOffPeriodRequestParameters | CoolingOffPeriodRequestParameters |  |
