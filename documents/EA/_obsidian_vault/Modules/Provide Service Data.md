---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Documentation/PCG"
domain: "Modules"
element_id: 1180862
diagrams: 1
connections: 0
tags:
  - package
  - modules
---

# 📁 Provide Service Data

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Documentation/PCG

## 📝 Notes

Surrounding system can ask to provide any service data.

## Input

- service code
- service version (optional)

## Output

- service data

## Detail

At first the system makes validations for correct service code and version on input and in case it is valid, system provides service data in output.

If service version is not present on input, system uses Active version of service (if exists).

## 📊 Appears In (1 diagrams)

- Custom: PCG
