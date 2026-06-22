---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Generated Messages/Insurance change notifications"
domain: "Analysis Model"
element_id: 1856588
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 LoanServiceRequestRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Generated Messages/Insurance change notifications

## 📝 Notes

Message for notification about changes of Loan Service Request of a type related to particular Contract.
The message is intended for insurance change purpose only

## 🔗 Connections (5)

- → Dependency: [[LoanServiceRequestTypeDto (Enumeration 1856591)]]
- → Dependency: [[ContractSystemEventType (Enumeration 1856593)]]
- → Dependency: [[LoanServiceRequestStatusDto (Class 1856589)]]
- → Dependency: [[ServiceOperationStatusTypeDto (Enumeration 1856592)]]
- → Association: [[RequestParametersChoice (Class 1856587)]]

## 📊 Appears In (1 diagrams)

- Logical: Insurance change notifications

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| eventType | ContractSystemEventType |  |
| requestId | string |  |
| requestType | LoanServiceRequestTypeDto |  |
| expirationDate | date |  |
| requestChanges | LoanServiceRequestStatusDto |  |
| serviceOperationStatus | ServiceOperationStatusTypeDto |  |
