---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1080 (CBL-3175) Legal Requirements - Changing of Payment prioritisation for CEL"
domain: "Requirements Model"
element_id: 1373290
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 PAYM-1080 (CBL-3175) Legal Requirements - Changing of Payment prioritisation for CEL

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1080 (CBL-3175) Legal Requirements - Changing of Payment prioritisation for CEL

## 📝 Notes

Changes to installment pairing priorities are required by KZ and will be effective from 1.1.2019.

Current BSL data model does not give us flexible option to change Installment priorities without the intervention from PCG. Since the Installment priorities are more in ownership of ISPAY team, approaching PCG for configuration makes it complicated and hard to maintain.

As a part of the CBL, we will modify the data model and move attributes related to pairing mechanism to a separated entity in responsibility of ISPAY team.

Possible future improvements:

	
- Moving link to T&C from product to contract and ideally making it versionable.

## 🔗 Connections (3)

- ← Generalization: [[REQ#3 Create new pairing settings and priorities for KZ]]
- ← Generalization: [[REQ#1 Allow versioning of pairing settings and pairing priorities for T&C]]
- ← Generalization: [[REQ#2 Use Pairing Settings for TAC in pairing process]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1080 (CBL-3175) Legal Requirements - Changing of Payment prioritisation for CEL
