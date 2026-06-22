---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation"
domain: "Data manipulation support"
element_id: 1584681
diagrams: 1
connections: 1
tags:
  - usecase
  - data-manipulation-support
---

# 🎯 Set Rejected contract to In Process status

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation

## 📝 Notes

This use case describes needed data manipulations to change contract status from Rejected to In Process provided that the contract previous status is In Process.
This situation can generally occur when system automatically reject the contract due to rejection the client at identification in the CIF (the last contract sub status is RCM - CIF manual). The customer can require to sent the contract to the CIF identification again.

After the action is performed, next step should be sending the contract to the CIF.

## 🔗 Connections (1)

- → UseCase «include»: [[Change contract status]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract status manipulation
