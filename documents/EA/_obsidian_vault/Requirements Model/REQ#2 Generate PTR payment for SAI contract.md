---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1410 (CBL-3666) Standalone insurance"
domain: "Requirements Model"
element_id: 1375656
diagrams: 1
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 Generate PTR payment for SAI contract

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1410 (CBL-3666) Standalone insurance

## 📝 Notes

If there is a non-zero service subvention defined for a contract, we need to disburse it to the partner via PTR payment. This payment will be generated directly in status W (waiting) and will be switched to status U (unpaid) during processing of COP request of the contract. This payment will not be switched to U (unpaid) during standard moments of payment defined on salesroom (contract signing, contract package received, contract registration).

## 🔗 Connections (1)

- → Generalization: [[PAYM-1410 (CBL-3666) Standalone insurance (Requirement 1375653)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1410 (CBL-3666) Standalone insurance
