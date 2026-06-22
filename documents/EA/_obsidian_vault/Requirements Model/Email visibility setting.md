---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail"
domain: "Requirements Model"
element_id: 1878887
diagrams: 3
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Email visibility setting

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail

## 📝 Notes

This rule describes the logic of how the Email is displayed on the applicable screens based on the user's access right settings.

In case user does not have the 01.210 Show contract detail (show unmasked client email) privilege granted, then all email's characters before the at symbol ('@') except the first two are masked - replaced by the star symbol ('*').
Otherwise the email's value is displayed in a standard form without any masking applied.

Example of masking:
   - 'u@email.com' is not anyhow masked, as there is less than two characters before the at sign ('u@email.com' is displayed)
   - 'us@email.com' is not anyhow masked, as there are exactly two characters before the at sign ('us@email.com' is displayed)
   - 'use@email.com' is masked as 'us*@email.com'
   - 'user@email.com' is masked as 'us**@email.com'

## 🔗 Connections (3)

- ← Dependency: [[Primary email]]
- ← Dependency: [[{MOD}Email]]
- → Dependency: [[01.210 Show contract detail (show unmasked client email)]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail
- Custom: Common Business Rules for Contract Management
- Custom: Tab - Client
