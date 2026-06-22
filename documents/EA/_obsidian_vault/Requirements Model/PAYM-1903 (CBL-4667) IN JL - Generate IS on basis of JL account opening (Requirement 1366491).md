---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening"
domain: "Requirements Model"
element_id: 1366491
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening

## 📝 Notes

Proposed solution and scope (may be subject to change):
 * (4 MDs) IN will send information about JL account opening for a particular contract to a new BSL queue (probably JMS)
 * (3 MDs) On basis of the event above, BSL will:
 ** Create business event 'Installment schedule generated' with reason 'JL account opened'
 ** Trigger installment schedule generation.
 * (0 MDs) First due date will be passed in notification from IN (first bullet) -set to JL account opening date + 1 month-; standard EOMSpread parameter will be used. No impact here, maybe just check of a correct settings.
 * (5 MDs) Solve different settings for regular cash loans and JL cash loans. Details will be specified later on.
 * 3 MDs reserve for bugfixing.

## 🔗 Connections (1)

- ← Generalization: [[Generate IS on basis of JL account opening]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening
