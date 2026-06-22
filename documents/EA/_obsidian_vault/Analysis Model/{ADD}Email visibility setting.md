---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Business Rules"
domain: "Analysis Model"
element_id: 1657186
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Email visibility setting

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Business Rules

## 📝 Notes

{ADD CLM-3615/}
This rule describes the logic of how the Email is displayed based on the user's access right settings.

In case user does not have granted privilege:

	
- 06.030 Show client data (show unmasked client email) for Client detail in Client center


	
- 08.900 Show available collection tools for client's contracts (show unmasked client email)  for Client header in Collection tools overview


then all email's characters before the at symbol ('@') except the first two are masked - replaced by the star symbol ('*').
Otherwise the email's value is displayed in a standard form without any masking applied.

Example of masking:
   - 'u@email.com' is not anyhow masked, as there is less than two characters before the at sign ('u@email.com' is displayed)
   - 'us@email.com' is not anyhow masked, as there are exactly two characters before the at sign ('us@email.com' is displayed)
   - 'use@email.com' is masked as 'us*@email.com'
   - 'user@email.com' is masked as 'us**@email.com'

## 🔗 Connections (3)

- → Dependency: [[{ADD}08.900 Show available collection tools for client's contracts (show unmasked client email)]]
- → Dependency: [[{ADD}06.030 Show client data (show unmasked client email)]]
- ← Dependency: [[{MOD}Primary e-mail]]

## 📊 Appears In (2 diagrams)

- Custom: Business Ruless
- Custom: CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail
