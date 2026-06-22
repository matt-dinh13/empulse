---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Modules/Commodity/Documentation/CMD"
domain: "Modules"
element_id: 1178306
diagrams: 1
connections: 0
tags:
  - package
  - modules
---

# 📁 Update Commodity Data

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Modules/Commodity/Documentation/CMD

## 📝 Notes

Surrounding system can ask to modify existing commodity.

## Input

- commodity id
- commodity data values
- update mode
- validation parameters

## Output

- update result
- commodity id

## Detail

At first the system makes validations for correct commodity data on input and in case data is valid, system updates existing commodity.

There are several update modes available for specific system needs (the most used is NO_RESTRICTION).

After successful update, commodity is validated (only If any appropriate commodity validation rule is present on used environment).

## 📊 Appears In (1 diagrams)

- Custom: CMD
