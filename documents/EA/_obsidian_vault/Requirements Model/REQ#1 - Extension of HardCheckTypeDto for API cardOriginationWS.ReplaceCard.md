---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8142 (CLM-2613) Adding checks for Card reissue"
domain: "Requirements Model"
element_id: 1504431
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Extension of HardCheckTypeDto for API cardOriginationWS.ReplaceCard

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8142 (CLM-2613) Adding checks for Card reissue

## 📝 Notes

Add enum to HardCheckTypeDto for CardOriginationWS.ReplaceCard API:

	
- ACCOUNT_STATUS


Check / add localization for:

	
- CardOperationFailedReasonTypeDto.ACCOUNT_STATUS  (similar as exists for CARD_STATUS)
	
- CardOperationFailedReasonTypeDto.DPD_LIMIT

as it is used in the BusinessEvents on GUI

## 📊 Appears In (1 diagrams)

- Custom: CBL-8142 (CLM-2613) Adding checks for Card reissue
