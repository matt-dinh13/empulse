---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-17584 (CLM-5227) BOS/Zeebe implementation of PST: consumers calling new APIs Pt 1"
domain: "Requirements Model"
element_id: 1743685
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-17584 (CLM-5227) BOS/Zeebe implementation of PST: consumers calling new APIs Pt 1

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-17584 (CLM-5227) BOS/Zeebe implementation of PST: consumers calling new APIs Pt 1

## 📝 Notes

Call Zeebe instead of PST for client offer:

	
- under a new feature flag clientOfferOverZeebe
	
- a new role for clm_user to serve the offer result: ZEEBE_API_GATEWAY
	
- take LOR classes over as-is into CLM codebase, including Feign

## 📊 Appears In (1 diagrams)

- Custom: CBL-17584 (CLM-5227) BOS/Zeebe implementation of PST: consumers calling new APIs Pt 1
