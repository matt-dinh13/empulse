---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/My overview"
domain: "Modules"
element_id: 1865681
diagrams: 5
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 Show User assignment modal

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/My overview

## 📝 Notes

{ADD CLM-5259/}

This UC requires {ADD}10.062 Assign ticket to user and {ADD}10.063 Unassign ticket from user privileges to run.

## 🔗 Connections (4)

- ← Dependency: [[{ADD}Assignee]]
- → UseCase «include»: [[10.062 Assign ticket to user]]
- → UseCase «include»: [[10.063 Unassign ticket from user]]
- ← Dependency: [[My assigned active tickets]]

## 📊 Appears In (5 diagrams)

- Custom: {ADD}My overview form
- Custom: CBL-19215 (CLM-5259) Add queue support - GUI
- Custom: CBL-19215 (CLM-5364) Implement select2 component
- Custom: Ticket detail - user interface
- Use Case: Ticketing - involved use cases
