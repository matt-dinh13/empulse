---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation"
domain: "Data manipulation support"
element_id: 1584674
diagrams: 1
connections: 3
tags:
  - usecase
  - data-manipulation-support
---

# 🎯 Set Canceled contract to Signed when it was Approved only

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation

## 📝 Notes

This use case describes steps to change the contract status form Cancelled to Signed provided that the previous status is Approved (it means, the contract has never been in the Signed status.)
This problem can occur if a sales agent (SA) prints whole credit documentation, the client signs that but the SA does not confirm the contract signature in the system. Keep in mind there is not possible to use this scenario for other reasons than the mentioned above.  Available only for close end loans.

## 🔗 Connections (3)

- → Dependency: [[Creation INSTALMENT120 record rules]]
- → UseCase «include»: [[Change contract status]]
- → Dependency: [[OBS message mapping rules]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract status manipulation
