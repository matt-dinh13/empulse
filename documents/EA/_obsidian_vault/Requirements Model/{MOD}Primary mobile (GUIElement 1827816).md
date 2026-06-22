---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9912 PIF PII Data Masking & New Access Right - Loan Origination/LOR-10355 RBP: integrate to /v2 PIF API"
domain: "Requirements Model"
element_id: 1827816
diagrams: 2
connections: 2
tags:
  - guielement
  - requirements-model
---

# 🖥️ {MOD}Primary mobile

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9912 PIF PII Data Masking & New Access Right - Loan Origination/LOR-10355 RBP: integrate to /v2 PIF API

## 📝 Notes

When parameter prefillPrimaryMobileFromPIF=true, value is prefilled from PIF for the selected client (CUID)
{ADD LOR-10355}Value can be masked based on user roles (handled by PIF). {/ADD}

Other:
This field is editable only when user has access right UC01_143_UpdatePhone

Localization code:
GEN_PhoneMobile1

## 🔗 Connections (2)

- ← Generalization: [[Primary mobile (GUIElement 1621953)]]
- ← Generalization: [[Primary mobile (GUIElement 1621969)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-10355 RBP: integrate to /v2 PIF API
- Custom: Product
