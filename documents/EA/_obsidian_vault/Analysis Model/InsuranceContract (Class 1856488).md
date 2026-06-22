---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Insurance Contract Services"
domain: "Analysis Model"
element_id: 1856488
diagrams: 3
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 InsuranceContract

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Insurance Contract Services

## 📝 Notes

Insurance contract structure

## 🔗 Connections (9)

- ← Dependency: [[InsuranceContract (Interface 1856390)]]
- → Dependency: [[InsuranceContractType]]
- → Dependency: [[InsuranceService (Class 1856570)]]
- → Dependency: [[InsurancePeriod]]
- → Dependency: [[InsuranceCustomData (Class 1856566)]]
- → Dependency: [[InsuranceContractStatusType]]
- → Dependency: [[InsuranceProgram (Class 1856569)]]
- → Dependency: [[InsuranceOperationStatus]]
- → Dependency: [[InsuranceContractStatusTransition]]

## 📊 Appears In (3 diagrams)

- Logical: Insurance Contract - Activate and Deactivate Insurance
- Logical: Insurance Contract - Get Insurance Contract data
- Logical: InsuranceContract structures

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| currentStatus | InsuranceContractStatusType |  |
| loanContractCode | string |  |
| customerId | long |  |
| type | InsuranceContractType |  |
| subjectType | string |  |
| automaticProlongation | boolean |  |
| service | InsuranceService |  |
| program | InsuranceProgram |  |
| insurancePeriods | InsurancePeriod |  |
| operationStatusLog | InsuranceOperationStatus |  |
| insuredCommodityId | string |  |
| statusTransitions | InsuranceContractStatusTransition |  |
| customData | InsuranceCustomData |  |
