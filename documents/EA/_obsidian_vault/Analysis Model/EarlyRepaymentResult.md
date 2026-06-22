---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract CET Service Requests"
domain: "Analysis Model"
element_id: 1750025
diagrams: 4
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 EarlyRepaymentResult

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract CET Service Requests

## 📝 Notes

Attributes of the FER/CET service requests.
Source of Result means getting data from Early Repayment Result structure calculated by UC 03.070 Calculate early repayment amount

## 🔗 Connections (4)

- ← Usage: [[{ADD}FERServiceRequest]]
- ← Dependency: [[{ADD}FERServiceRequestPreview]]
- ← Usage: [[CETServiceRequestPreview]]
- ← Dependency: [[CETServiceRequest]]

## 📊 Appears In (4 diagrams)

- Logical: Contract CET Service Requests - create request
- Logical: Contract CET Service Requests - get preview
- Logical: Contract FER Service Requests - create request
- Logical: Contract FER Service Requests - get preview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| totalOutstandingDebtToErDate | money |  |
| dueDate | date |  |
| penaltiesSum | money |  |
| totalEarlyRepayment | money |  |
| principalSum | money |  |
| interestSum | money |  |
| feesSum | money |  |
| erFeeSum | money |  |
| internalRefundAmt | money |  |
| totalToPayment | money |  |
| overpaymentAmt | money |  |
| giftPaymentAmt | money |  |
| expirationDate | date |  |
| {ADD}cancelledInsuranceAmt | money |  |
