---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Generated messages/Contract Service Notifications"
domain: "Modules"
element_id: 1823908
diagrams: 1
connections: 6
tags:
  - class
  - modules
---

# 🔷 ContractInsuranceServiceNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Generated messages/Contract Service Notifications

## 📝 Notes

Common structure for Contract insurance notification

## 🔗 Connections (6)

- ← Generalization «XSDextension»: [[ContractInsuranceServiceActivatedNotification]]
- ← Generalization «XSDextension»: [[ContractInsuranceServiceOperStatusChangedNotification]]
- ← Generalization «XSDextension»: [[ContractInsuranceServiceCreatedNotification]]
- ← Generalization «XSDextension»: [[ContractInsuranceServiceTerminatedNotification]]
- ← Generalization «XSDextension»: [[ContractInsuranceServiceCanceledNotification]]
- → Generalization «XSDextension»: [[ContractServiceNotification]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Service Notifications

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| insuranceContractCode | string |  |
