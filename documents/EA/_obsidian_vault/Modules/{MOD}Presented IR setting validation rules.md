---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Logical Data Model"
domain: "Modules"
element_id: 1824451
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {MOD}Presented IR setting validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Logical Data Model

## 📝 Notes

Following validation rules are not implemented in system, but must be respected when the setting is modified via data manipulation.

{DEL PCG-4476}Valid From, Valid To
Validation according to rules Summary VALIDATIONS for setting of time dependent properties.
{/DEL}

Product Type
- reference to Product Type by Code
- mandatory

Case
- reference to Presented Interest Rate Case
- mandatory

Presented IR Type
- reference to Presented IR type by Code (use correct PIR type corresponding with Product Type) 
- mandatory

Display Name
- chars [5..20]
- mandatory

Print Name
- chars [5..50]
- mandatory

Order
{DEL PCG-4401}- number [1..3], sequence starts by 1 and continues without skipping, no more active setting with the same order can be defined {/DEL}
- mandatory

Display in offer
- mandatory

Display in contract
- mandatory

Display in printout
- mandatory

{ADD PCG-4396}Code
- chars [4-20]
- allowed characters from set "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-" space is not allowed
- mandatory{/ADD}

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Presented IR Setting]]
- → Dependency: [[Summary VALIDATIONS for setting of time dependent properties]]

## 📊 Appears In (1 diagrams)

- Logical: Presented interest rate - Setting
