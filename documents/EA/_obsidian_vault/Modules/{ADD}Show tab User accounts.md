---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-11232/CLM-4032 - Client center - New tab User Accounts (PH) - List of accounts"
domain: "Modules"
element_id: 1878946
diagrams: 3
connections: 8
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Show tab User accounts

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-11232/CLM-4032 - Client center - New tab User Accounts (PH) - List of accounts

## 📝 Notes

{ADD CLM-4032}
Goal of this use case is to display tab User accounts. This tab is populated with contracts data based on REST API calls to:

	
- Credential store


Use case code: UC_TAB_SHOW_USER_ACCOUNTS

This use case is being assigned to role directly.

## 🔗 Connections (7)

- ← Dependency: [[{ADD}Tab User Accounts (Screen 1800011)]]
- → Realisation: [[06.030 Show client´s phone (Client detail) (Requirement 1799935)]]
- → Realisation: [[06.030 Show client data (hidden contracts)]]
- → Realisation: [[06.030 Show client data (Manage in CIF) (Requirement 1799938)]]
- → Realisation: [[06.030 Show client data (Requirement 1799934)]]
- → Realisation: [[06.030 Show client data (CB results) (Requirement 1799941)]]
- ← Dependency: [[{MOD}06.030 Show Client Data (UseCase 1878935)]]

## 📊 Appears In (3 diagrams)

- Custom: CLM-4032 - Client center - New tab User Accounts (PH) - List of accounts
- Custom: Tab User accounts
- Use Case: Client Management
