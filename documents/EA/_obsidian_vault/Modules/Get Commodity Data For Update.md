---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Modules/Commodity/Documentation/CMD"
domain: "Modules"
element_id: 1178309
diagrams: 1
connections: 0
tags:
  - package
  - modules
---

# 📁 Get Commodity Data For Update

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Modules/Commodity/Documentation/CMD

## 📝 Notes

Surrounding system can ask to provide commodity data needed for its update.

## Input

- commodity id
- update mode

## Output

- for update result
- commodity id
- enabled for update (boolean parameter for each commodity data value)
- commodity data values

## Detail

At first the system makes validations for correct commodity data on input and in case data is valid, system provides data for update of existing commodity in output.

There are several update modes available for specific system needs (the most used is NO_RESTRICTION).

## 📊 Appears In (1 diagrams)

- Custom: CMD
