---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-463 RBP online for cash loans (CBL-585)"
domain: "Requirements Model"
element_id: 1271203
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - New method for saving of Marketing Offer into DB

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-463 RBP online for cash loans (CBL-585)

## 📝 Notes

Create new method of ProductOfferLimitsWS for direct saving/updating of Marketing Offer into Product Offer Limits:
- add flag Active to Product Offer Limits and reflect it in methods for Product Offer Limit management
- allow update all parameters of Product Offer Limits individually for particular client (CUID)
- create new method for create/update of Product Offer Limits
- use the new method in the rule Save Marketing Offer to BSL
- add unique record ID in Product Offer Limits and use it for reference from Offer Financial Parameters

## 📊 Appears In (1 diagrams)

- Custom: PCG-463 RBP online for cash loans (CBL-585)
