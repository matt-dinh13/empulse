---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Services (COS_NG)/Interface Provided/Generated messages/Contract Service Notifications v1"
domain: "Modules"
element_id: 1870002
diagrams: 2
connections: 22
tags:
  - class
  - modules
---

# 🔷 ContractServiceNotification

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Interface Provided/Generated messages/Contract Service Notifications v1

## 📝 Notes

A notification message about changes of a Services on Contract (including insurance service)

## 🔗 Connections (22)

- ← Generalization: [[ContractInsuranceServiceOperStatusChangedNotification (Class 1840700)]]
- ← Generalization: [[ContractServiceActivatedNotification (Class 1840710)]]
- ← Generalization: [[ContractServiceOperStatusChangedNotification (Class 1840701)]]
- ← Generalization: [[ContractServiceTerminatedNotification (Class 1840708)]]
- ← Generalization: [[ContractInsuranceServiceActivatedNotification (Class 1840711)]]
- ← Generalization: [[ContractInsuranceServiceTerminatedNotification (Class 1840709)]]
- ← Generalization: [[ContractServiceCreatedNotification (Class 1840704)]]
- ← Generalization: [[ContractInsuranceServiceCanceledNotification (Class 1840707)]]
- ← Generalization: [[ContractServiceReplacedNotification (Class 1840705)]]
- ← Generalization: [[ContractServiceReplacedRollbackNotification (Class 1840698)]]
- ← Generalization: [[ContractServiceCanceledNotification (Class 1840706)]]
- ← Generalization: [[ContractInsuranceServiceCreatedNotification (Class 1840703)]]
- → Usage: [[FinancialParameter (Class 1868239)]]
- → Usage: [[Service (Class 1868237)]]
- → Dependency: [[Tariff (Class 1868231)]]
- → Usage: [[Service (Class 1868237)]]
- → Usage: [[ServiceParameter (Class 1868244)]]
- → Usage: [[Deal (Class 1870004)]]
- → Dependency: [[RelatedContractSupplement]]
- → Dependency: [[OperationStatusType (Enumeration 1870001)]]
- ← Generalization: [[ContractCardServiceNotification (Class 1870000)]]
- → Dependency: [[ContractServiceRole (Class 1869999)]]

## 📊 Appears In (2 diagrams)

- Logical: Contract Card Service Notifications
- Logical: Contract Service Notifications

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| reasonCode | string |  |
| contractCode | string |  |
| loanServiceId | string |  |
| requestId | string |  |
| service | Service |  |
| status | string |  |
| financialParameters | FinancialParameter |  |
| serviceParameters | ServiceParameter |  |
| contractSupplement | RelatedContractSupplement |  |
| effectiveDate | dateTime |  |
| operationStatus | OperationStatusType |  |
| tariff | Tariff |  |
| contractServiceRole | ContractServiceRole |  |
| replacedService | Service |  |
| deal | Deal |  |
| {ADD}accountNumber | string |  |
