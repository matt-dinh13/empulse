---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Insurance Contract Services/v2"
domain: "Analysis Model"
element_id: 1856489
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 InsuranceContract_v2

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Insurance Contract Services/v2

## 📝 Notes

Insurance contract structure

## 🔗 Connections (4)

- ← Usage: [[InsuranceContract (Interface 1856390)]]
- ← Usage: [[InsuranceContract (Interface 1856390)]]
- ← Usage: [[InsuranceContract (Interface 1856390)]]
- → Usage: [[InsuranceService_v2]]

## 📊 Appears In (3 diagrams)

- Logical: Insurance Contract - Activate Insurance v2
- Logical: Insurance Contract - Deactivate Insurance v2
- Logical: Insurance Contract - Get Insurance Contract data v2

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
