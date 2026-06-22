---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/ID/Payments"
domain: "Analysis Model"
element_id: 1351988
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Allowed character set (Account holder name - ID)

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/ID/Payments

## 📝 Notes

Allowed character set:
- Latin alphabet (a-zA-Z)
- Slash (/)
- Apostrophe (')
- Period (.)
- Comma (,)
- Ampersand (&)
- Dash (-)

If the user enters invalid value, MSG_WRONG_PATTERN appears.

## 🔗 Connections (1)

- ← Dependency: [[PaymentChannelType validation rule - ID]]

## 📊 Appears In (2 diagrams)

- Custom: Payments data validation
- Custom: Validation Rules - ID
