---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18427 (CSI-2407) TopUp Service usage"
domain: "Requirements Model"
element_id: 1758055
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Req#1 - TopUp service param calculation and usage

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18427 (CSI-2407) TopUp Service usage

## 📝 Notes

New service type TOPUP is defined with new contract service parameters:
- TOPUP_OVERLAP_PERIOD (Number of overlap periods, defined by LOR during contract origination)
- TOPUP_OVERLAP_PERIOD_END_DATE (Due date of last overlap period, calculated after sign)

Rule {MOD}Calculation of Loan Service parameters updated to calculate TOPUP_OVERLAP_PERIOD_END_DATE 
New rule {ADD}Check TopUp overlap period for contract added and used by all services with Loan Service Requests and for Insurance termination

## 📊 Appears In (1 diagrams)

- Custom: CBL-18427 (CSI-2407) TopUp Service usage
