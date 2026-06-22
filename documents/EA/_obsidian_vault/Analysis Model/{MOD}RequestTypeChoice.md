---
type: Class
stereotype: "XSDchoice"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA"
domain: "Analysis Model"
element_id: 1607558
diagrams: 3
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}RequestTypeChoice

> **Type**: Class · **Stereotype**: «XSDchoice»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA

## 🔗 Connections (6)

- → Dependency: [[PaymentHolidayRequestParameter]]
- → Dependency: [[PartialEarlyRepaymentRequest]]
- → Dependency: [[LoanRestructuringRequestParameter]]
- ← Association: [[LoanServiceRequestDocument]]
- → Dependency: [[FullEarlyRepaymentRequest]]
- → Dependency: [[ChangeDueDateRequestParameter]]

## 📊 Appears In (3 diagrams)

- Logical: HO_SERVICE_REQUEST_DATA
- Logical: HO_SERVICE_REQUEST_DATA - FER printout usage
- Logical: HO_SERVICE_REQUEST_DATA - PER printout usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| fullEarlyRepaymentRequest | FullEarlyRepaymentRequest |  |
| partialEarlyRepaymentRequest | PartialEarlyRepaymentRequest |  |
| loanRestructuring | LoanRestructuringRequestParameter |  |
| paymentHoliday | PaymentHolidayRequestParameter |  |
| changeDueDate | ChangeDueDateRequestParameter |  |
