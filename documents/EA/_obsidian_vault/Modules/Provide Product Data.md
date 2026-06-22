---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Documentation/PCG"
domain: "Modules"
element_id: 1180861
diagrams: 1
connections: 0
tags:
  - package
  - modules
---

# 📁 Provide Product Data

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Documentation/PCG

## 📝 Notes

Surrounding system can ask to provide any product data.

## Input

- product code
- product version (optional)

## Output

- product data

## Detail

At first the system makes validations for correct product code and version on input and in case it is valid, system provides product data in output.

If product version is not present on input, system uses Active version of product (if exists).

## 📊 Appears In (1 diagrams)

- Custom: PCG
