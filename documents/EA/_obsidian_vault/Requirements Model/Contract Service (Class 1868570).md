---
type: Class
stereotype: "historization"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention"
domain: "Requirements Model"
element_id: 1868570
diagrams: 22
connections: 17
tags:
  - class
  - requirements-model
---

# 🔷 Contract Service

> **Type**: Class · **Stereotype**: «historization»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention

## 📝 Notes

This entity represents services adjusted on the contract and their current status. Some tariff items may be linked to the service adjusted. Some adjusted services can be linked to a specific commodity.

## 🔗 Connections (16)

- ← Association: [[Contract Supplement (Class 1862126)]]
- → Association: [[Service (Class 1880804)]]
- → Association: [[{MOD}Tariff]]
- → Association: [[{MOD}Commodity (Class 1879036)]]
- ← Generalization: [[Contract Insurance Service (Class 1868564)]]
- ← Aggregation: [[Contract Service Parameter]]
- → Dependency: [[Contract Service Status (Class 1868553)]]
- → Dependency: [[Contract Service Status Reason]]
- ← Generalization: [[Contract Card Service]]
- ← Aggregation: [[Loan Service Request (Class 1868549)]]
- ← Association: [[Contract Service Document]]
- ← Generalization: [[Contract Insurance Service (Class 1869955)]]
- ← Generalization: [[Contract Card Service (Class 1869953)]]
- ← Association: [[COPExecutedSE]]
- → Aggregation: [[{MOD}Contract (Class 1879596)]]
- ← Association: [[FP Subvention Item]]

## 📊 Appears In (22 diagrams)

- Custom: PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention
- Logical: CEL Rewards request
- Logical: Change due date request
- Logical: Checking Terms of Loan Service Request
- Logical: Collection tool operation domains
- Logical: Contract
- Logical: Contract - Financial parameters
- Logical: Contract - Services
- Logical: Contract Service
- Logical: Contract Supplements
- Logical: COS - LDM changes
- Logical: COS - LDM changes
- Logical: CSI-1881 Update of the Contract Service domain
- Logical: Early repayment request
- Logical: Insurance Commodity domain
- Logical: Insurance Contract
- Logical: Loan consolidation - Logical Data Model
- Logical: Loan restructuring request domain
- Logical: Loan Service Request domain
- Logical: LSR.Insurance Offer - Logical Data Model
- Logical: Others
- Logical: Payment holiday request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Evaluation Paused | boolean |  |
| When Created | {MOD}Check Moment Type |  |
| End Date | Date |  |
| Start Date | Date |  |
| Status | Contract Service Status |  |
| Status Reason | Contract Service Status Reason |  |
| External ID | string |  |
| Commodity External ID | string |  |
| Status Reason Description | string |  |
| Service code | string |  |
| Service version | int |  |
| Tariff code | string |  |
| Tariff version | int |  |
| Service External Id | string |  |
| Contract Code | string |  |
| Transaction Supplement Id | string |  |
