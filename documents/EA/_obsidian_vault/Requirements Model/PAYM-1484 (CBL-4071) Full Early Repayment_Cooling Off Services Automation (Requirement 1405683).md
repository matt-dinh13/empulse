---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1484 (CBL-4071) Full Early Repayment/Cooling Off Services Automation"
domain: "Requirements Model"
element_id: 1405683
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 PAYM-1484 (CBL-4071) Full Early Repayment/Cooling Off Services Automation

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1484 (CBL-4071) Full Early Repayment/Cooling Off Services Automation

## 📝 Notes

Trigger FER automatically (without request) when enough money are received on a contract.

Some quick notes:
* Revert will be necessary for cases when client repaid accidentally and wants us to return overpayment /  prepayment (BSL already knows how to revert paid off contracts, it may be similar). FER_BACK mBean already implemented, some modifications could be needed
* The behaviour should be driven by setting on service, initial migration might be needed.
* Order of services has to be defined. Maybe ask Milan Osicka if there is already something similar.

## 🔗 Connections (1)

- ← Generalization: [[DEV CBL-4071 FER processing automation]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1484 (CBL-4071) Full Early Repayment/Cooling Off Services Automation
