---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1878728
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Create Service Timeline record

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

{ADD IS-1346}
Service timeline saves input data about financial parameters, installment schedule and evaluated services for manipulation with IS (e.g. service back mBeans, move IS to version)

Conditions:
- contract type CEL

Input: 
- Contract ID
- Recalculation reason
- Installment version
- Loan service request (optional)
- Financial parameters ID
- Installment ID (optional)

Service timeline record for input data is created with archived = 0.
{/ADD IS-1346}
