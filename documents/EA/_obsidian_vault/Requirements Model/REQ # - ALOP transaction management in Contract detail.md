---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)"
domain: "Requirements Model"
element_id: 1612011
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 REQ # - ALOP transaction management in Contract detail

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)

## 📝 Notes

This requirement is aimed to providing information about ALOP transactions in the Contract detail -> Supplements tab for users.

#Open questions BIZ: 

	
- Is it needed to show detail of the ALOP transaction?
	
- May we allow operator to cancel ALOP request?
	
- what if a registration will be needed? Where can the operator start it - Supplement tab?
	
- Should the operator be able to print ALOP (supplement) documents?


Info from PH business:
 - For now can we proceed on this request: get SupplementByCUID (via array; all supplement not just latest) - this would be obtained based on CUID. There will be returned all "CEL" supplement transactions (e.g. ALOP, APOS,...)
- GET Document detail - it will probably needed to have it

## 📊 Appears In (1 diagrams)

- Custom: CBL-244 (CLM-971) Cash on card with separate limit (ALOP)
