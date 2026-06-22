---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7036 (CLM-2233) Restrict Contract search function for SA"
domain: "Requirements Model"
element_id: 1822386
diagrams: 3
connections: 1
tags:
  - guielement
  - requirements-model
---

# 🖥️ Show contracts created by me

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7036 (CLM-2233) Restrict Contract search function for SA

## 📝 Notes

LDM search for:
Contract->BusinessEvent[where type = CREATE_APPLICATION].ModifiedBy = currently logged user

Hidden if any of following option is chosen:
- 'Contracts for disbursement channel verification'
- Remote contracts for 2BoD filling
{ADD CLM-2860} - Sales agent search{/ADD}

Localization code: CON_SearchCreatedByMe

## 🔗 Connections (1)

- → Dependency: [[01.300 Search for contract (Created by me)]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-7036 (CLM-2233) Restrict Contract search function for SA
- Custom: Search for contract
- Custom: Search for contract UI
