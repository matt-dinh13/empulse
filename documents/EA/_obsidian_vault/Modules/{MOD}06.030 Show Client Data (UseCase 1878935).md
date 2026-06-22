---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/Access Rights"
domain: "Modules"
element_id: 1878935
diagrams: 12
connections: 22
tags:
  - usecase
  - modules
---

# 🎯 {MOD}06.030 Show Client Data

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/Access Rights

## 📝 Notes

Purpose of this use case is to show required data from CIF and BSL for selected client.

## 🔗 Connections (21)

- ← Dependency: [[Client Detail URL (Interface 1799966)]]
- ← Dependency: [[Client data (Screen 1799971)]]
- ← Dependency: [[List of clients - Default (Object 1799959)]]
- ← Dependency: [[List of clients - KZ (Object 1799961)]]
- → Realisation: [[06.030 Show client data (Requirement 1799934)]]
- → Realisation: [[06.030 Show client data (Manage in CIF) (Requirement 1799938)]]
- → Realisation: [[{ADD}06.030 Show client data (display Date of birth) (Requirement 1799932)]]
- → Dependency: [[Get original number instead of alias for Unique Id document]]
- → Realisation: [[{ADD}06.030 Show client data (show client address data) (Requirement 1799939)]]
- → Realisation: [[06.030 Show client´s phone (Client detail) (Requirement 1799935)]]
- → Realisation: [[{ADD}06.030 Show client data (display Parent name) (Requirement 1799931)]]
- → Dependency: [[Is Marketing Offer to be Responded]]
- → Dependency: [[{ADD}Show tab List of contracts]]
- → Dependency: [[Show tab Customer offers]]
- → Realisation: [[06.030 Show client data (CB results) (Requirement 1799941)]]
- → Realisation: [[{ADD}06.030 Show client data (display Gender) (Requirement 1799930)]]
- → Dependency: [[{MOD}Show Tab List of communication]]
- → Realisation: [[06.030 Show client data (hidden contracts)]]
- → Dependency: [[{ADD}Show tab User accounts]]
- → Dependency: [[07.120 Show communication ticket list v2]]
- ← Association: [[User (Actor 1879373)]]

## 📊 Appears In (12 diagrams)

- Custom: Access Rights
- Custom: CBL-11677 (CLM-3703) - Client center - Tab List of Contracts
- Custom: CBL-11677 (CLM-3730) - Client center - Menu
- Custom: CBL-18865 (CLM-5391) pass user token to PIF REST API
- Custom: Client detail
- Custom: Client detail URL
- Custom: CLM-3701 - Client center - Customer offer tab v2
- Custom: CLM-4318 - Replace screen MMO with tab CO in CC
- Custom: List of clients - Default
- Custom: List of clients - KZ
- Custom: List of clients - VN
- Use Case: Client Management
