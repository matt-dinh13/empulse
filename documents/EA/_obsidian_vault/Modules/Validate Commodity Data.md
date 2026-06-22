---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Modules/Commodity/Documentation/CMD"
domain: "Modules"
element_id: 1180849
diagrams: 1
connections: 0
tags:
  - package
  - modules
---

# 📁 Validate Commodity Data

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Modules/Commodity/Documentation/CMD

## 📝 Notes

Surrounding system can ask for validation of commodity data.

## Input

- commodity id
- validation parameters
- salesroom code

## Output

- validation result
- commodity id

## Detail

Commodity validations can be divided into internal validations (done in module CMD) and external validations (done in module OSB).

At first the system makes validations for correct commodity data on input and in case data is valid, system validates existing commodity.
Next step for the system is to make internal validations (if defined in commodity validation rules).
And finally system makes any external validations (if defined in commodity validation rules).

## 📊 Appears In (1 diagrams)

- Custom: CMD
