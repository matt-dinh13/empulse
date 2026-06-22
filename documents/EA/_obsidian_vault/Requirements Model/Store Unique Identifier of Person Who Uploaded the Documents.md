---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-481 (CBL-397) Store Unique Identifier of Person Who Uploaded the Documents"
domain: "Requirements Model"
element_id: 1271056
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Store Unique Identifier of Person Who Uploaded the Documents

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-481 (CBL-397) Store Unique Identifier of Person Who Uploaded the Documents

## 📝 Notes

In the past month we are having some issue with the calculation of our incentives for the documents upload, because there is a mismatch in the DWH data of the person who uploaded it. For example : The person that uploaded the Documents is Dewi Yanti from the ops team, but the data in the DWH is showing Dewi Yanti the SA. After investigation with colleagues from the DWH team in EIT, the root cause is because the data in the cabinet does not have unique identifiers and only have the Actor name. This causes the DWH team to have no other alternative on how to mapped it to the Employee data other using the name. Thus creating the issue when we have 2 or more employee with the same name.

## 📊 Appears In (1 diagrams)

- Custom: CLM-481 (CBL-397) Store Unique Identifier of Person Who Uploaded the Documents
