---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Process account closure/Use Case Model"
domain: "Modules"
element_id: 1867046
diagrams: 1
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Process Account Closure notification

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Process account closure/Use Case Model

## 📝 Notes

{ADD DOBA-279 /}
The use case presents evaluation and processing AccountClosureResult message from AM. Now there are only processed Account Cancel and Terminate notification types here. Contract can be finished in this use case when following rules are fulfilled:

	
- Contract is cancelled if all related Accounts are cancelled.
	
- Contract is finished if one Account is terminated at least and remaining Account are cancelled, or terminated

## 🔗 Connections (3)

- → Dependency: [[Set contract status to Finished rule (COMA)]]
- → Dependency: [[Set contract status to Cancelled rule (COMA)]]
- ← Association: [[Account management (Actor 1869950)]]

## 📊 Appears In (1 diagrams)

- Use Case: Processing Account Closure notification - Use Case Model
