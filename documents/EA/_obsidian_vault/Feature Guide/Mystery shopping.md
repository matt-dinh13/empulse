---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Feature Guide/LOR"
domain: "Feature Guide"
element_id: 1433091
diagrams: 1
connections: 0
tags:
  - package
  - feature-guide
---

# 📁 Mystery shopping

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Feature Guide/LOR

## 📝 Notes

System supports creating mystery shopping contracts. Based on setting of the client in CIF, if considered as mystery shopper then such contract is marked as mystery shopping contract.

## Input
- CUID

## Output
- mystery shopping contract

## Detail
After submitting application form system send identification request to CIF, which will return information about client along with a mystery shopping flag. When client is a mystery shopper, system considers such client as new client. This way "mystery shopping client" can visit multiple salesroom and still be considered as a new client. Also created mystery shopping contracts is not possible to find using standard contract search (it can be found with special access right).

## 📊 Appears In (1 diagrams)

- Package: LOR
