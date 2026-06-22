---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode"
domain: "Requirements Model"
element_id: 1881449
diagrams: 2
connections: 8
tags:
  - usecase
  - requirements-model
---

# 🎯 {MOD}13.114 Process transaction cancellation request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode

## 📝 Notes

The use case presents function for processing responses for account transaction cancellation received from AM exchange.

## 🔗 Connections (6)

- ← UseCase: [[CaBus-AM]]
- → Dependency: [[{MOD}Create Confirm Transaction Request for AM]]
- → Dependency: [[Create CASH_POS transaction rule]]
- → Dependency: [[Call Transaction confirmation (REST) in AM]]
- → Dependency: [[Change status of Contract Supplement]]
- → Dependency: [[{DEL}Call Confirm transaction service]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode
- Use Case: Transaction Supplement refunding - Use case model
