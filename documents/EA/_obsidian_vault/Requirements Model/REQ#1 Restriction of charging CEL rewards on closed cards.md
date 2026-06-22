---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11254 (CSI-575) Restriction of charging CEL rewards on closed cards"
domain: "Requirements Model"
element_id: 1601531
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 Restriction of charging CEL rewards on closed cards

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11254 (CSI-575) Restriction of charging CEL rewards on closed cards

## 📝 Notes

Following updates are needed:

	
- RW payment channel with specific type is created for each CEL reward, even for payment to Own contract (OC) - managed by LOR
	
- generation of CEL reward payment is updated to use the existing RW payment channel or to create a new one with OC type if not exists (to support old contract without RW channel) - UC 08.601
	
- existing RW payment channel linked to terminated contract is updated to OC type (ContractFinishingAutomaticallySE generated after contract termination runs a new UC 08.605)

## 📊 Appears In (1 diagrams)

- Custom: CBL-11254 (CSI-575) Restriction of charging CEL rewards on closed cards
