---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7036 (CLM-2233) Restrict Contract search function for SA"
domain: "Requirements Model"
element_id: 1822466
diagrams: 3
connections: 0
tags:
  - guielement
  - requirements-model
---

# 🖥️ Include mistakes

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7036 (CLM-2233) Restrict Contract search function for SA

## 📝 Notes

This attribute determines if custom search will also calculate information about mistakes for found contracts. Inclusion of mistakes to search will negatively influence search performance (i.e. it will take longer time to display search results).
{ADD CLM-2860}If SAContractSearchOpenTickets = 1 then the field is hidden{/ADD}

Default value:
Attribute is Unchecked by default

Localization: CON_IncludeMistakes

## 📊 Appears In (3 diagrams)

- Custom: CBL-7036 (CLM-2233) Restrict Contract search function for SA
- Custom: Search for contract
- Custom: Search for contract UI
