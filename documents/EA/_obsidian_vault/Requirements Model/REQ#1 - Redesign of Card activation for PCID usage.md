---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10842 (CSI-182) Redesign of Card activation for PCID usage"
domain: "Requirements Model"
element_id: 1608399
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Redesign of Card activation for PCID usage

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10842 (CSI-182) Redesign of Card activation for PCID usage

## 📝 Notes

When the Card activation is run (UC 12.506 Internal card activation/UC 12.534 Card authentication), calling CardInfoWS.FindCard is used. Sometime more than one card is found and the action ends up with error. 

In order to avoid above mentioned issue, we change the functionality to use CardInfoWS.getCard with PCID (internal card identifier) which is always unique.

Following UC has to be updated:
12.506 Internal card activation 
12.539 Internal PIN request

## 📊 Appears In (1 diagrams)

- Custom: CBL-10842 (CSI-182) Redesign of Card activation for PCID usage
