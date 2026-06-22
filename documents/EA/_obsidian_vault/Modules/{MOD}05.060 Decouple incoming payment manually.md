---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Pairing incoming payments/Access Rights"
domain: "Modules"
element_id: 1875792
diagrams: 4
connections: 13
tags:
  - usecase
  - modules
---

# 🎯 {MOD}05.060 Decouple incoming payment manually

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Pairing incoming payments/Access Rights

## 📝 Notes

User executes this use case to unpair an incoming payment from the contract. Paired version of the incoming payment is canceled and new unpaired version (copy) is created.

## 🔗 Connections (11)

- ← Dependency: [[Decouple payment]]
- → NoteLink: [[PaymentPairingService _PaymentPairingService - pair and unpari payment]]
- → Dependency: [[Incoming payment unpairing is alowed]]
- → Realisation: [[REQ1 Change re-pairing functionality]]
- → Realisation: [[05.060 Decouple incoming payment manually (Requirement 1673315)]]
- → Realisation: [[REQ 1_ Accrued income calculation]]
- → UseCase «include»: [[05.045 Cancel incoming payment (UseCase 1877227)]]
- → Realisation: [[REQ 1_ New attribute of Incoming payment]]
- → Realisation: [[REQ #2 Modification of current incoming payment processing functions]]
- ← UseCase: [[User (Actor 1877510)]]
- ← Dependency: [[Decouple payment (GUIElement 1880318)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: Browse incoming payments - UI
- Custom: Show incoming payment detail panel
- Use Case: Couple and decouple incoming payment manually
