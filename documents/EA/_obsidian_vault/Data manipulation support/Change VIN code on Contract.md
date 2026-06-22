---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Other contract manipulations"
domain: "Data manipulation support"
element_id: 1277910
diagrams: 1
connections: 0
tags:
  - usecase
  - data-manipulation-support
---

# 🎯 Change VIN code on Contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Other contract manipulations

## 📝 Notes

This use case describes steps to change a Serial number (VIN/Chassis code) and possibly Engine number on commodity of Vehicle type related to a provided contract.
There has to be checked that provided Serial and Engine numbers are unique for all the active contract in the system.
The provided Serial and Engine numbers should be checked for valid format that is accepted by the country.
This action should be performed only if the user cannot change mentioned numbers via standard GUI (see also Contract detail screen - tab Commodity and Edit commodity screen)

## 📊 Appears In (1 diagrams)

- Use Case: Other contract manipulations
