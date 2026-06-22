---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module"
domain: "Modules"
element_id: 1851668
diagrams: 3
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 Resolve an action for contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module

## 📝 Notes

The use case sorts the contract out to a specific registration queue based on defined data and configuration.
REM is to orchestrate registration, i.e. it will deal out new registration actions with ContractRegistrationActionResolvedEventV1 based on queue rulesets given in config (the QueuesConfig tab in the XX_REM_configuration.xlsx config file (only IN as of mid 2025)). Consumers of this Rabbit notification will then act upon the tickets accordingly.

## 🔗 Connections (5)

- ← Association: [[COMA (Actor 1844330)]]
- ← Association: [[BSL (Actor 1844327)]]
- → Association: [[REM (Actor 1844331)]]
- → Association: [[TCK (Actor 1844333)]]
- → Dependency: [[{MOD}Missing registration data retrieval]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-17316 (CLM-5164) Registration based on REM module
- Custom: CBL-20217 (CLM-5645) Vanilla Kafka decommissioning - REM consumer
- Use Case: Resolving registration action
