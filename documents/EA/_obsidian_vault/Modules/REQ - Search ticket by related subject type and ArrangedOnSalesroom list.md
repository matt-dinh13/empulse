---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-29392 (CLM-7205) Ticket search by contract salesroom code"
domain: "Modules"
element_id: 1865774
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ - Search ticket by related subject type and ArrangedOnSalesroom list

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-29392 (CLM-7205) Ticket search by contract salesroom code

## 📝 Notes

TCK update for VN.

1/ UC10.022 Create ticket service
1a/
If ticket is created from CLC and contract code is provided in TCK url parameter, then related subject of CONTRACT type is created and its originatedOn (ArrangedOnSalesroom) value is taken from defined business event of related contract
1b/
If ticket is created by TCK API v1 and contract code is used, then related subject of CONTRACT type is created and its originatedOn (ArrangedOnSalesroom) value is taken from defined business event of related contract
1c/
If ticket is created by TCK API v2 and there is related subject of CONTRACT type without originatedOn value, then its originatedOn value is taken from defined business event of related contract

2/ UC10.012 Search for tickets service
Add possibility to search ticket by related subject type and ArrangedOnSalesroom list (in similar way as relatedSubjectCodes)

## 📊 Appears In (1 diagrams)

- Custom: CBL-29392 (CLM-7205) Ticket search by contract salesroom code
