---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Documentation/PCG"
domain: "Modules"
element_id: 1180874
diagrams: 1
connections: 0
tags:
  - package
  - modules
---

# 📁 Assign Product on Salesroom

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Documentation/PCG

## 📝 Notes

Created products can be assigned on/removed from any existing salesroom (manually via GUI or via bulk xml import).

## Input

- salesroom code
- product code
- valid from
- valid to

## Output

- assignment/removal result

## Detail

At first the system makes validations for correct data on input and in case they are valid, system assigns/removes product on/from salesroom.

The decision if it is removal or assignment request is driven by input parameter valid from. If it is not empty, system recognizes it as assignment request. Otherwise it is a removal request.

## 📊 Appears In (1 diagrams)

- Custom: PCG
