---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation"
domain: "Data manipulation support"
element_id: 1584679
diagrams: 1
connections: 1
tags:
  - usecase
  - data-manipulation-support
---

# 🎯 Set Rejected contract to Approved status

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation

## 📝 Notes

This use case describes needed data manipulations to change contract status from Rejected to Approved provided that the contract previous status is In Process.
In order to keep data consistency with LAP, no update of SCORING_RESULT table is performed.

## 🔗 Connections (1)

- → UseCase «include»: [[Change contract status]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract status manipulation
