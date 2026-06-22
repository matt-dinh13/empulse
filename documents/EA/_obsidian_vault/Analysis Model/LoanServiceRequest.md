---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Service Requests"
domain: "Analysis Model"
element_id: 1850947
diagrams: 1
connections: 11
tags:
  - class
  - analysis-model
---

# 🔷 LoanServiceRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Service Requests

## 🔗 Connections (11)

- → Dependency: [[LoanRestructuringRequest]]
- → Dependency: [[CELRewardRequest]]
- → Dependency: [[LoanServiceRequestStatusTransition]]
- → Dependency: [[LoanServiceRequestStatusType]]
- → Dependency: [[OperationStatusType (Enumeration 1850942)]]
- → Dependency: [[EarlyRepaymentRequest]]
- → Dependency: [[RequestOrigination]]
- → Dependency: [[LoanConsolidationRequest]]
- → Dependency: [[CheckingTermsRequest]]
- → Dependency: [[ChangeDueDateRequest]]
- → Dependency: [[PaymentHolidayRequest]]

## 📊 Appears In (1 diagrams)

- Logical: Loan Service Requests

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalId | string |  |
| loanServiceExternalId | string |  |
| requestType | Service Type |  |
| currentStatus | Loan Service Request Status Type |  |
| statusTransitions | LoanServiceStatusTransition |  |
| expirationDate | date |  |
| operationStatus | OperationStatusType |  |
| requestOrigination | RequestOrigination |  |
| note | text |  |
| celReward | CELRewardRequest |  |
| changeDueDate | ChangeDueDateRequest |  |
| checkingTerms | CheckingTermsRequest |  |
| loanConsolidation | LoanConsolidationRequest |  |
| earlyRepayment | EarlyRepaymentRequest |  |
| loanRestructuring | LoanRestructuringRequest |  |
| paymentHoliday | PaymentHolidayRequest |  |
| {ADD}supplementId | Service Type |  |
