---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Feature Guide/LOR"
domain: "Feature Guide"
element_id: 1433089
diagrams: 1
connections: 0
tags:
  - package
  - feature-guide
---

# 📁 Prepare documentation

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Feature Guide/LOR

## 📝 Notes

User is able to prepare contract documentation for approved application, including insurance contract if any insurance that was selected.

## Input
- application code

## Output
- contract documentation

## Detail
System automatically creates documents that are required and not created yet (document types assigned to product profile with check moment type CIC).
Data from application are sent to Printserver which prepares printouts (one or separate PDF files, depends on setting) with contract documentation (document types assigned to product profile with print moment type CIC). These can be printed for client to sign. These printouts are also stored in Cabinet. When documentation is hand signed, then it can be scanned and uploaded to related document in BSL. 

On product profile level it can be defined:

- how long prepared contract documentation is valid
- for how many days documentation can be regenerated when previous contract documentation is out of date

## 📊 Appears In (1 diagrams)

- Package: LOR
