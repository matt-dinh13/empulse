---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3666 (CLM-1478) Extended Warranty Standalone"
domain: "Requirements Model"
element_id: 1314770
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #2 - Sign contract for standalone insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3666 (CLM-1478) Extended Warranty Standalone

## 📝 Notes

This part involves usage of the new contract type for Standalone insurance (SAI) into CLM part of the Contract signature process.
Following changes are expected for UC01.187 Sign contract and related functions:
- Sign contract finalization:

	
- GenerateOutPaymentYN system property will be removed. Parts of code under GenerateOutPaymentYN = 0 will be removed as well
	
- Condition accepted for SAI contracts is not set in moment of Contract signature

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Update data in contract related structures]]
- ← Dependency: [[{MOD}Sign contract finalization]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-3666 (CLM-1478) Extended Warranty Standalone
