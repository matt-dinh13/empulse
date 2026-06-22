---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Feature Guide/LOR"
domain: "Feature Guide"
element_id: 1433092
diagrams: 1
connections: 0
tags:
  - package
  - feature-guide
---

# 📁 Choose product offer

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Feature Guide/LOR

## 📝 Notes

Potential client has to choose offer based on loan parameters.

## Input
- commodity
- loan product parameters (e.g. price, maximum monthly payment)
- client's documents
- service preference
- bound product code

## Output
- offers

## Detail
In choose product offer user enters data, which are then sends request to product calculator to generate suitable offer. Above mentioned input criteria depends on selected type of loan (e.g. consumer loan, cash loan, bound offer).

System can prefill commodity data (e.g. model, price) based on selected manufacturer using external module management.

Result with all generated offers is presented in a form of grid (with customizable columns). Selected offer is then consulted with potential client and if he/she is interested, one offer is selected and user is redirected to application form, that must be filled in order to send application to approval.

## 📊 Appears In (1 diagrams)

- Package: LOR
