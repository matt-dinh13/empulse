---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Account management/Account blockage/User interface"
domain: "Analysis Model"
element_id: 824056
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Active blockings

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account blockage/User interface

## 📝 Notes

Displays all active blockages on currently selected account.
Is empty for accounts, which are not blocked.

Paging: No. Will contain less than 10 items (typically 1 or 2).

## 🔗 Connections (3)

- → Dependency: [[12.610 Unblock account (UseCase 1849947)]]
- → Dependency: [[Account Blocking Reason Type]]
- ← Dependency: [[UnblockAccountRequest]]

## 📊 Appears In (1 diagrams)

- Custom: UI: Account blockage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Block Reason | String |  |
| User | String |  |
| Blocked From Date | Date |  |
| Actions | Actions |  |
