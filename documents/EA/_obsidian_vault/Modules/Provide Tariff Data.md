---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Documentation/PCG"
domain: "Modules"
element_id: 1180863
diagrams: 1
connections: 0
tags:
  - package
  - modules
---

# 📁 Provide Tariff Data

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Documentation/PCG

## 📝 Notes

Surrounding system can ask to provide any tariff data.

## Input

- tariff code
- tariff version (optional)

## Output

- tariff data

## Detail

At first the system makes validations for correct tariff code and version on input and in case it is valid, system provides tariff data in output.

If tariff version is not present on input, system uses Active version of tariff (if exists).

## 📊 Appears In (1 diagrams)

- Custom: PCG
