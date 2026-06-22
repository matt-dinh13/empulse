---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Generated messages/Contract Service Notifications"
domain: "Modules"
element_id: 1823905
diagrams: 4
connections: 12
tags:
  - class
  - modules
---

# 🔷 ContractServiceNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Generated messages/Contract Service Notifications

## 📝 Notes

A notification message about changes of a Service on Contract (including an insurance)

## 🔗 Connections (12)

- ← Generalization «XSDextension»: [[ContractServiceTerminatedNotification]]
- ← Generalization: [[ContractServiceReplacedRollbackNotification]]
- ← Generalization «XSDextension»: [[ContractServiceActivatedNotification]]
- ← Generalization «XSDextension»: [[ContractServiceCanceledNotification]]
- ← Generalization «XSDextension»: [[ContractServiceCreatedNotification]]
- ← Generalization «XSDextension»: [[ContractServiceOperStatusChangedNotification]]
- ← Generalization «XSDextension»: [[ContractServiceReplacedNotification]]
- → Dependency: [[{ADD}ContractServiceRole]]
- ← Generalization «XSDextension»: [[ContractInsuranceServiceNotification]]
- → Dependency: [[RelatedTransaction]]
- → Dependency: [[OperationStatusType (Enumeration 1823909)]]
- ← Generalization: [[ContractCardServiceNotification]]

## 📊 Appears In (4 diagrams)

- Logical: Contract Card Service Notifications
- Logical: Contract Service Notification
- Logical: Contract Service Notifications
- Logical: ContractServiceNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serviceExternalId | string |  |
| reasonCode | string |  |
| contractCode | string |  |
| requestId | string |  |
| loanServiceId | string |  |
| customerId | long |  |
| serviceCode | string |  |
| serviceVersion | int |  |
| serviceStatus | string |  |
| relatedTransaction | RelatedTransaction |  |
| effectiveDate | dateTime |  |
| serviceOperationStatus | OperationStatusType |  |
| tariffCode | string |  |
| tariffVersion | int |  |
| {ADD}contractServiceRole | {ADD}ContractServiceRole |  |
