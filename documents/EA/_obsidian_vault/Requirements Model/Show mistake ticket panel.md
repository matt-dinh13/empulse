---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-12588 (CLM-2810) REM integration - Contract detail - Registration tab"
domain: "Requirements Model"
element_id: 1868319
diagrams: 2
connections: 4
tags:
  - usecase
  - requirements-model
---

# 🎯 Show mistake ticket panel

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-12588 (CLM-2810) REM integration - Contract detail - Registration tab

## 📝 Notes

This use case presents generating and showing panels with Mistake ticket information used on the Contract registration, or Supplement registration forms. For each Document involved in the registration is generated number of panels equal number of recorded mistake tickets to specific Document.

## 🔗 Connections (4)

- ← UseCase «include»: [[01.230 Show contract package detail (UseCase 1759985)]]
- ← UseCase «include»: [[13.275 Show supplement registration]]
- → Dependency: [[Tickets (Boundary 1868334)]]
- → Dependency: [[GetTicketInfos]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-12588 (CLM-2810) REM integration - Contract detail - Registration tab
- Custom: CBL-6153 (CLM-3253) Ticket search access rights used for contract and supplement registration
