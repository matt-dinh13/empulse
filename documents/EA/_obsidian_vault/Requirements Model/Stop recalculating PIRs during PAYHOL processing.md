---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1470 (CBL-4010) Interest calculation changes for payment holiday service"
domain: "Requirements Model"
element_id: 1377186
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Stop recalculating PIRs during PAYHOL processing

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1470 (CBL-4010) Interest calculation changes for payment holiday service

## 📝 Notes

In order to comply with IN requirements we need to stop recalculating Presented interest rates during the processing of Payment Holiday service. Their recalculation results in customers' complaints that interest rate of their loan (visible in client app) changed even though it should stay the same. The (non-)recalculation will be driven by a global parameter (it will be turned off for IN).

Moreover, a data manipulation is required in IN for the contracts with PAYHOL applied in order to revert PIRs values valid before PAYHOL processing (see SD for detailed information).

## 🔗 Connections (1)

- → Generalization: [[PAYM-1470 (CBL-4010) Interest calculation changes for payment holiday service (Requirement 1377185)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1470 (CBL-4010) Interest calculation changes for payment holiday service
