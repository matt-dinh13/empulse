---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/Validation rules"
domain: "Analysis Model"
element_id: 1760101
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Set link to Client center

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/Validation rules

## 📝 Notes

{ADD CLM-5070/}

This rule decides if element on screen takes the user to a Client center (in CLC module or in BSL) or to home page/nowhere - in case user comes from public domain site (https://shop.homecredit.*) on a public IP range and no public CLC domain is set (yet), i.e. to prevent the user from accidentally landing on a page out of their domain.

It calls the rule Select Client center for user and does the following based on its result of:
- CLC_MODULE: it sets the given element's anchor href attribute to lead to CLC module's Client center 
- CLC_BSL:  it sets the given element's anchor href attribute to lead to BSL's Client center 
- CLC_ERROR: it disables the given element's link (i.e. element is now plain text) or changes the element's target to home page.

## 📊 Appears In (1 diagrams)

- Custom: Validation rules
