---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9520 (CLM-2918) New requirements by Payment Holidays"
domain: "Requirements Model"
element_id: 1688600
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Setting and using of minimal due date of deferred installment for PAYHOL

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9520 (CLM-2918) New requirements by Payment Holidays

## 📝 Notes

Changes to PAYHOL service are required by KZ (regulatory requirements of KZ national bank):

	
- First installment after 15.3.2020 will be always selected as installment for deferral (regardless of fact that installment is paid or another unpaid installment exists)


Solution:
New service parameter for definition of minimal date of deferred period (BSL_CONTRACT_SERVICE_PARAM can be used and filled by DM as quick solution - param type = PAYHOL_MIN_DATE) 
Change in business rule Determine first installment for deferral (used for both request and processing) - use only installments with due date >= defined minimal date for deferral installment selection will be driven by CLM feature flag UsePayholMinDate (set for KZ only)


New feature flag UsePayholMinDate:
default = false
for KZ = true

## 📊 Appears In (1 diagrams)

- Custom: CBL-9520 (CLM-2918) New requirements by Payment Holidays
