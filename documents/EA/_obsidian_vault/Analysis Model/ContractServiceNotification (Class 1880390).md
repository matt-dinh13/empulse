---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract Service notification"
domain: "Analysis Model"
element_id: 1880390
diagrams: 2
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 ContractServiceNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract Service notification

## 📝 Notes

A notification message about changes of a Service on Contract (including an insurance)

{ADD CSI-4332}new message header: 
isInitialNotification = false 
by default (if not said otherwise){/ADD}

## 🔗 Connections (9)

- ← Generalization «XSDextension»: [[ContractServiceOperStatusChangedNotification (Class 1880377)]]
- ← Generalization: [[{ADD}ContractServiceReplacedRollbackNotification]]
- ← Generalization «XSDextension»: [[ContractInsuranceServiceNotification (Class 1880392)]]
- ← Generalization «XSDextension»: [[ContractServiceReplacedNotification (Class 1880395)]]
- ← Generalization «XSDextension»: [[ContractServiceCanceledNotification (Class 1880396)]]
- ← Generalization «XSDextension»: [[ContractServiceActivatedNotification (Class 1880398)]]
- → Dependency: [[OperationStatusType (Enumeration 1880389)]]
- ← Generalization «XSDextension»: [[ContractServiceTerminatedNotification (Class 1880388)]]
- → Dependency: [[RelatedTransaction (Class 1880387)]]

## 📊 Appears In (2 diagrams)

- Logical: Contract Service notification
- Logical: Contract Service Notification v5

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| reasonCode | string |  |
| contractCode | string |  |
| requestId | string |  |
| loanServiceId | string |  |
| customerId | long |  |
| serviceCode | string |  |
| relatedTransaction | RelatedTransaction |  |
| {ADD}effectiveDate | dateTime |  |
