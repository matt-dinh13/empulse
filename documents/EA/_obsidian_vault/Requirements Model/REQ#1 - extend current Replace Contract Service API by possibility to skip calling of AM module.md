---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6153 (CLM-2992) Extend maintenance function for bulk change of service on contracts"
domain: "Requirements Model"
element_id: 1688717
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - extend current Replace Contract Service API by possibility to skip calling of AM module

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6153 (CLM-2992) Extend maintenance function for bulk change of service on contracts

## 📝 Notes

Replace Contract Service API  should be used also as maintenance function for service replacement in BSL instead of data manipulations.

For REL contracts the replacement is allowed by default only if AM module confirms possibility to replace.
So it is needed to add optional attribute to the API to skip this AM call and specific access right for using of this attribute:

	
- attribute skipAM
	
- access right 01.782 Replace Contract Service (skip AM)

## 📊 Appears In (1 diagrams)

- Custom: CBL-6153 (CLM-2992) Extend maintenance function for bulk change of service on contracts
