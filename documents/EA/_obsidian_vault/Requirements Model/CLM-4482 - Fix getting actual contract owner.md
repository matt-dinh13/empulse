---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-4482 - Fix getting actual contract owner"
domain: "Requirements Model"
element_id: 1689258
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-4482 - Fix getting actual contract owner

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-4482 - Fix getting actual contract owner

## 📝 Notes

Use following condition to get actual contract owner:
Contract -> Ownership [.Archived = 0 and .Valid to is Null].Code

## 📊 Appears In (1 diagrams)

- Custom: CLM-4482 - Fix getting actual contract owner
