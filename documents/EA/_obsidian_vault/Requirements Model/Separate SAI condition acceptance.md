---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5507 (CLM-2841) Simultaneous processing of regular jobs and payment pairing "
domain: "Requirements Model"
element_id: 1688786
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Separate SAI condition acceptance

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5507 (CLM-2841) Simultaneous processing of regular jobs and payment pairing 

## 📝 Notes

Currently UC 01.712 and UC 01.252 are shared by two functionalities:
* Contract finishing after successful service execution
* Setting conditions to accepted for SAI contracts

Separate the SAI functionality to a standalone UC. Access rights to this new UC should be granted to all roles that currently have a right for UC 01.712. 

Use global parameter ASYNC_DC_CALCULATION to switch between the old and the new functionality. If ASYNC_DC_CALCULATION = true then use the new UC for SAI conditions acceptance else use the original UC for both functionalities (as-is). That means changing processing of LoanServiceRequestExecutedSE and COPExecutedSE to call both UCs (01.712 and the new one) if GP is turned on.

Keep GP turned off everywhere, turn it on just for testing purposes.

Post-condition: System works exactly the same with GP turned on or off (for both CEL finishing and SAI condition acceptance).

## 🔗 Connections (1)

- → Generalization: [[Debt Catalog (DC) to trigger contract finishing evaluation]]

## 📊 Appears In (1 diagrams)

- Custom: Debt Catalog (DC) to trigger contract finishing evaluation (IS-639)
