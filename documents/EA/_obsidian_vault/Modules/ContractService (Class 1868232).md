---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Services (COS_NG)/Requirement Model/CBL-22777 SME Project"
domain: "Modules"
element_id: 1868232
diagrams: 11
connections: 16
tags:
  - class
  - modules
---

# 🔷 ContractService

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Requirement Model/CBL-22777 SME Project

## 📝 Notes

This entity represents services adjusted on the contract and their current status. Some tariff items may be linked to the service adjusted. Some adjusted services can be linked to a specific commodity.

## 🔗 Connections (16)

- → Usage: [[RelatedSubject (Class 1868243)]]
- → Usage: [[ContractServiceStatusTransition (Class 1868242)]]
- → Usage: [[ServiceOperationStatusType (Enumeration 1868235)]]
- → Usage: [[Service (Class 1868237)]]
- ← Usage: [[{ADD}ContractServices (Class 1868241)]]
- → Usage: [[ContractServiceStatus (Enumeration 1868240)]]
- → Usage: [[Tariff (Class 1868231)]]
- → Usage: [[Role (Class 1868230)]]
- ← Usage: [[ContractServices (Interface 1870215)]]
- ← Usage: [[ContractServices (Interface 1870215)]]
- ← Usage: [[ContractServices (Interface 1870215)]]
- ← Usage: [[ContractServices (Interface 1870215)]]
- ← Usage: [[ContractServices (Interface 1870215)]]
- ← Usage: [[ContractServices (Interface 1870215)]]
- ← Usage: [[ContractServices (Interface 1870215)]]
- ← Usage: [[ContractServices (Interface 1870215)]]

## 📊 Appears In (11 diagrams)

- Custom: CSI-3202 - UserRole assignment to contract service
- Logical: Activate Loan Service method (COS) v1
- Logical: Add Role to Contract Services method
- Logical: Adding Loan Service to Contract method (COS) v1
- Logical: Cancel Contract Services method (COS)
- Logical: Deactivate Contract Services method (COS)
- Logical: Deactivate Role on Contract Services method
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
| roles | Role |  |
