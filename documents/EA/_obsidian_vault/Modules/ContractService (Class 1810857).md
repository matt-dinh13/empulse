---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Services (COS)/Requirement Model/CBL-22777 SME Project"
domain: "Modules"
element_id: 1810857
diagrams: 12
connections: 20
tags:
  - class
  - modules
---

# 🔷 ContractService

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Requirement Model/CBL-22777 SME Project

## 📝 Notes

{ADD CSI-2970 /}
This entity represents services adjusted on the contract and their current status. Some tariff items may be linked to the service adjusted. Some adjusted services can be linked to a specific commodity.

## 🔗 Connections (19)

- → Usage: [[NewService]]
- → Usage: [[ContractServiceStatus]]
- → Usage: [[RelatedSubject (Class 1810856)]]
- → Usage: [[{ADD}Role (Class 1810855)]]
- → Usage: [[Service (Class 1810854)]]
- → Usage: [[Tariff (Class 1810853)]]
- → Usage: [[ContractServiceStatusTransition]]
- → Usage: [[ServiceOperationStatusType]]
- ← Usage: [[ContractServices (Interface 1835824)]]
- ← Usage: [[ContractServices (Interface 1835824)]]
- ← Usage: [[ContractServices (Interface 1835824)]]
- ← Usage: [[ContractServices (Interface 1835824)]]
- ← Usage: [[ContractServices (Interface 1835824)]]
- ← Usage: [[ContractServices (Interface 1835824)]]
- ← Usage: [[ContractServices (Interface 1835824)]]
- ← Usage: [[ContractServices (Interface 1835824)]]
- ← Usage: [[ContractServices (Interface 1835824)]]
- ← Usage: [[ContractServices (Interface 1835824)]]
- ← Usage: [[{ADD}ContractServices]]

## 📊 Appears In (12 diagrams)

- Custom: CSI-3202 - UserRole assignment to contract service
- Logical: {ADD}Add Role to Contract Services method
- Logical: {ADD}Deactivate Role on Contract Services method
- Logical: Activate Loan Service method (COS)
- Logical: Activate Loan Service method (COS) v2
- Logical: Adding Loan Service to Contract method (COS)
- Logical: Cancel Contract Services method (COS)
- Logical: Deactivate Contract Services method (COS)
- Logical: Get Contract Services data method (COS)
- Logical: Replace Contract Services method (COS)
- Logical: Schema Definitions
- Logical: Terminate Contract Service method (COS)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalId | string |  |
| service | Service |  |
| tariff | Tariff |  |
| startDate | Date |  |
| endDate | Date |  |
| currentStatus | ContractServiceStatus |  |
| currentOperationStatus | ServiceOperationStatusType |  |
| relatedSubjects | RelatedSubject |  |
| evaluationPaused | boolean |  |
| statusLog | ContractServiceStatusTransition |  |
| {ADD}roles | Role |  |
