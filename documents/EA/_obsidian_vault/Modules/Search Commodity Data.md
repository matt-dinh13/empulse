---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Modules/Commodity/Documentation/CMD"
domain: "Modules"
element_id: 1178310
diagrams: 1
connections: 0
tags:
  - package
  - modules
---

# 📁 Search Commodity Data

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Modules/Commodity/Documentation/CMD

## 📝 Notes

Surrounding system can ask to search existing commodity data.

## Input

- criteria
- value

## Output

- search result
- commodity id
- commodity data values

## Detail

At first the system makes validations for correct criteria and value on input and in case it is valid, system provides commodity data in output (filtered according to criteria).

Search criteria can be:
- SERIAL_NUMBER
- ENGINE_NUMBER
- IMEI
- SKU

## 📊 Appears In (1 diagrams)

- Custom: CMD
