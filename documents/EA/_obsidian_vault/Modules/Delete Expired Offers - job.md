---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Use Case"
domain: "Modules"
element_id: 1234677
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Delete Expired Offers - job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Use Case

## 📝 Notes

Automatic job code: EXPIRED_OFFER_DELETION
Description: Deletion of expired offers in Offer Repository
Used for: UC 02.001

Number of starts min: 1 per day
Time of start: after midnight (but not critical, can be start any time during a day)
Max number of starts: not limited
Business impact: LOW

## 🔗 Connections (1)

- ← Dependency: [[02.001 Delete Expired Offers (UseCase 1234676)]]

## 📊 Appears In (1 diagrams)

- Use Case: Offer Repository Management
